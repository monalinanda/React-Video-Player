import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useStateContext } from "../utils/StateContext";

const Navbar = () => {
  const playLists = useSelector((store) => store.videoPlayList.playlist);
  const { disablePlayListButton } = useStateContext();

  //toggle Button for show or hide create playList component
  const toggleButton = () => {};
  return (
    <nav className="flex bg-gradient-to-r from-indigo-500  w-full h-20">
      <div className="w-full flex justify-between items-center max-w-7xl sm:mx-auto px-2">
        <Link to="/">
          <h2 className=" font-sans font-extrabold sm:text-2xl text-lg">
            Video Player
          </h2>
        </Link>
        <div className="flex gap-3">
          <Link to="/createPlaylist">
            <button
              className=" sm:w-44 w-32 sm:h-11  h-14 p-1 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              onClick={toggleButton}
            >
              Create your PlayLists
            </button>
          </Link>
          <Link to="/myPlaylist">
            <button
              className=" sm:w-44 w-32 sm:h-11  h-14  p-3 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              onClick={toggleButton}
            >
              {playLists.length !== 0 || !disablePlayListButton
                ? "My PlayLists"
                : "Empty PlayList"}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
