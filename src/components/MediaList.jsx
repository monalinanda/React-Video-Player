import React from "react";
import MediaCard from "./MediaCard";
import { useSelector } from "react-redux";

const MediaList = () => {
  const movies = useSelector((store) => store.media.videos);
  const searchMovies = useSelector((store) => store.media.searchVideos);
  const showMovieList = searchMovies ? searchMovies : movies;

  if (!movies) return;
  return (
    <div className="w-full  h-auto ">
      <div className="flex flex-wrap gap-7">
        {showMovieList?.map((movie) => (
          <MediaCard
            id={movie.id}
            description={movie.description}
            sources={movie.sources}
            subtitle={movie.subtitle}
            title={movie.title}
            thumb={movie.thumb}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
