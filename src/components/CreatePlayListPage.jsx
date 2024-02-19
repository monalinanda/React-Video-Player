import React from "react";
import Form from "./Form";
import { useSelector } from "react-redux";
import useMediaList from "../hooks/useMediaList";
import { useStateContext } from "../utils/StateContext";
import Navbar from "./Navbar";

const CreatePlayListPage = () => {
  useMediaList();
  const { onhandelChange } = useStateContext();
  const movieList = useSelector((store) => store.media.videos);

  if (!movieList) return;
  return (
    <>
      <Navbar />
      <div className="sm:flex w-[90%] max-w-full  h-screen m-auto">
        <Form />
        <div>
          <ul className="border-t-gray-500 border-t-[1px] rounded ">
            {movieList?.map((movie) => (
              <li
                key={movie.id}
                className="flex items-center justify-items-start gap-2 m-1 "
              >
                <input
                  type="checkbox"
                  id={movie.id}
                  name="vehicle1"
                  value="Bike"
                  checked={movie?.checked}
                  onChange={() => onhandelChange(movie.id)}
                />
                <img
                  className=" w-40"
                  src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${movie.thumb}`}
                />
                <p>
                  {movie.title} | <span>{movie.subtitle}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CreatePlayListPage;
