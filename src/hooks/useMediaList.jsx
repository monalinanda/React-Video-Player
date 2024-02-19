import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addVideos } from "../utils/mediaListSlice";
import user from "../../mediaData.json";

const useMediaList = () => {
  const dispatch = useDispatch();
  // Fetch Data from store
  const videos = useSelector((store) => store.media?.videos);

  const getVideos = () => {
    const data = user?.categories[0].videos;
    dispatch(addVideos(data));
  };

  useEffect(() => {
    !videos && getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMediaList;
