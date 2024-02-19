import React, { useState } from "react";
import search from "../assets/search.svg";
import MediaList from "./MediaList";
import Navbar from "./Navbar";
import useMediaList from "../hooks/useMediaList";
import { addSearchVideos } from "../utils/mediaListSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  useMediaList();
  const movies = useSelector((store) => store.media.videos);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchTerm(e.target.value);
    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const filteredItems = movies.filter((item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        dispatch(addSearchVideos(filteredItems));
      }, 500)
    );
  };

  return (
    <div className="w-screen  h-screen">
      <Navbar />
      <div className=" m-auto pt-10 w-[90%] h-auto">
        <div className="flex justify-between">
          <h1 className="text-lg md:text-3xl py-4 text-white">Video Player </h1>
          <div className="relative rounded-lg mt-2  p-2 text-sm text-gray-500 outline-0 bg-white  sm:w-1/4 flex cursor-pointer ">
            <input
              type="text"
              placeholder="search videos"
              value={searchTerm}
              className=" cursor-pointer bg-transparent w-full h-full"
              onChange={handleSearchChange}
            />
            <img src={search} className=" absolute top-1/3 right-1" />
          </div>
        </div>
        <MediaList />
      </div>
    </div>
  );
};

export default Home;
