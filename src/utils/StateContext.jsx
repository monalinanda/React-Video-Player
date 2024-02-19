import React, { createContext, useContext, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/mediaListSlice";
import { addVideoPlayList } from "../utils/playListSlice";

const Context = createContext();

export const StateContext = ({ children }) => {
  const dispatch = useDispatch();
  const [movieItem, setMovieItem] = useState([]);
  const movieList = useSelector((store) => store.media.videos);
  const playLists = useSelector((store) => store.videoPlayList.playlist);
  const movies = useSelector((store) => store.media.videos);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setIsSubmitting] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [newPlayListArray, setNewPlayListArray] = useState(playLists);
  const [disablePlayListButton, setDisablePlayListButton] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newPlayList = {
      title: title,
      description: description,
      movieItem,
      img: movieItem[0].thumb,
    };
    setNewPlayListArray((arr) => [...arr, newPlayList]);
    dispatch(addVideoPlayList(newPlayListArray));
    setTitle("");
    setDescription("");
    dispatch(addVideos(movies.map((item) => ({ ...item, checked: false }))));
    alert("Playlist successfully created");
    setDisablePlayListButton(false);
  };

  useEffect(() => {
    localStorage.setItem("newPlayListArray", JSON.stringify(newPlayListArray));
  }, [newPlayListArray]);

  const onhandelChange = (id) => {
    const updatedArray = movieList.map((item) =>
      item.id === id
        ? { ...item, checked: item.checked === true ? false : true }
        : item
    );
    dispatch(addVideos(updatedArray));
    const checkedItems = updatedArray.filter((item) => item.checked);
    setMovieItem(checkedItems);
    setDisabled(!disabled);
  };

  return (
    <Context.Provider
      value={{
        movieItem,
        title,
        description,
        submitting,
        disabled,
        disablePlayListButton,
        setMovieItem,
        onhandelChange,
        setTitle,
        setDescription,
        handleSubmit,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
