import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addVideoPlayList } from "../utils/playListSlice";

const usePlayList = () => {
  const dispatch = useDispatch();
  // Fetch Data from store
  const storedVideosJSON = localStorage.getItem("newPlayListArray");
  const storedVideos = JSON.parse(storedVideosJSON);

  const getVideosPlayList = () => {
    dispatch(addVideoPlayList(storedVideos));
  };

  useEffect(() => {
    getVideosPlayList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePlayList;
