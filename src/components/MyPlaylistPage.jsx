import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PlayList from "./PlayList";
import usePlayList from "../hooks/usePlayList";

const MyPlaylistPage = () => {
  usePlayList();

  const playLists = useSelector((store) => store.videoPlayList.playlist);
  const [showPlayList, setShowPlayList] = useState(false);
  const [selectedPlayList, setSelectedPlayList] = useState(null);

  const handleClick = (item) => {
    setShowPlayList(!showPlayList);
    setSelectedPlayList(item);
  };
  const handleChildData = (data) => {
    setShowPlayList(data);
  };
  return (
    <div>
      <nav className="flex bg-gradient-to-r from-indigo-500  w-full h-20">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/">
            <h3>Video Player</h3>
          </Link>
        </div>
      </nav>
      <div className="flex justify-evenly flex-wrap gap-3 w-[90%] m-auto h-auto">
        {!showPlayList &&
          playLists?.map((item) => (
            <div
              className="w-52 h-40 relative cursor-pointer group/item hover:bg-slate-100 "
              onClick={() => handleClick(item)}
            >
              <img
                className="h-full"
                src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${item.img}`}
              />
              <p className=" absolute bottom-4 right-0 bg-black-transparent">
                {item.movieItem.length} videos
              </p>
              <div className="group/edit invisible hover:bg-slate-200 group-hover/item:visible ">
                <button className="bg-black-transparent text-white py-2 px-5 absolute bottom-[50px] left-[50px] ">
                  Play All
                </button>
              </div>
              <p>{item.title}</p>
            </div>
          ))}
      </div>
      {showPlayList && (
        <PlayList
          selectedPlayList={selectedPlayList}
          onChildData={handleChildData}
          flag={showPlayList}
          playLists={playLists}
        />
      )}
    </div>
  );
};

export default MyPlaylistPage;
