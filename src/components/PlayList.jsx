import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVideoPlayList } from "../utils/playListSlice";
import VideoScreen from "./VideoScreen";

const PlayList = ({ selectedPlayList, onChildData, flag, playLists }) => {
  const dispatch = useDispatch();
  const [updatePlayLists, setUpdatePlayLists] = useState(playLists);
  const [arrayMovieItems, setArrayMovieItems] = useState(
    selectedPlayList.movieItem
  );
  const [currentVideo, setCurrentVideo] = useState(
    selectedPlayList.movieItem[0]
  );
  const dragItem = useRef(0);
  const dragOverItem = useRef(0);

  const sendDataToParent = () => {
    // Invoke the callback function with the data to be passed to the parent
    onChildData(!flag);
  };

  //drag functionality and update playList array
  const handleSortPlayList = () => {
    const listItems = [...arrayMovieItems];
    const tempValue = listItems[dragItem.current];
    listItems[dragItem.current] = listItems[dragOverItem.current];
    listItems[dragOverItem.current] = tempValue;
    setCurrentVideo(listItems[dragOverItem.current]);
    setArrayMovieItems(listItems);
    const updateItems = updatePlayLists.map((item) => {
      if (item.title === selectedPlayList.title) {
        return { ...item, movieItem: listItems };
      }
      return item;
    });
    setUpdatePlayLists(updateItems);
    dispatch(addVideoPlayList(updateItems));
  };
  useEffect(() => {
    localStorage.setItem("newPlayListArray", JSON.stringify(updatePlayLists));
  }, [updatePlayLists]);

  const handleClick = (movie) => {
    setCurrentVideo(movie);
  };

  return (
    <div className=" w-[90%] m-auto">
      <button
        onClick={sendDataToParent}
        className=" sm:w-44 w-32 sm:h-11  h-14  p-3 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-6"
      >
        Close
      </button>
      <div className="flex gap-4 mt-10">
        <div className=" w-[60%]">
          <VideoScreen
            sources={currentVideo.sources}
            thumb={currentVideo.thumb}
          />
        </div>
        <div className="border-gray-500 border-1px] rounded  w-[40%] bg-gray-800 font-sans p-4">
          <div>
            <h3> Title : {selectedPlayList.title}</h3>
            <p>Description : {selectedPlayList.description}</p>
          </div>
          <ul>
            {arrayMovieItems.map((movie, index) => (
              <li
                key={movie.id}
                className="flex items-center justify-items-start gap-2 m-1  cursor-grab"
                draggable
                onDragStart={() => (dragItem.current = index)}
                onDragEnter={() => (dragOverItem.current = index)}
                onDragEnd={handleSortPlayList}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => handleClick(movie)}
              >
                <p>{movie.id}</p>
                <div className=" w-48 max-w-[1000px]">
                  <img
                    className="h-full"
                    src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${movie.thumb}`}
                  />
                </div>

                <p>
                  {movie.title} | <span>{movie.subtitle}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlayList;
