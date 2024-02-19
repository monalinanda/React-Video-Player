import React from "react";
import VideoScreen from "./VideoScreen";

const MediaCard = ({ id, sources, subtitle, title, thumb }) => {
  return (
    <div className="w-36 md:w-[470px] pr-4  cursor-pointer group" key={id}>
      <div className=" w-[90%] max-w-[1000px] h-auto">
        <VideoScreen sources={sources} thumb={thumb} />
        <p>
          {title} | {subtitle}
        </p>
      </div>
    </div>
  );
};

export default MediaCard;
