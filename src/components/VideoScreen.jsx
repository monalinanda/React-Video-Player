import React from "react";
import ReactPlayer from "react-player";

const VideoScreen = ({ sources, thumb }) => {
  const url = sources[0];
  const img = `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${thumb}`;

  return (
    <ReactPlayer
      controls={true}
      playing={true}
      light={<img src={img} alt="Thumbnail" className=" w-full h-fit" />}
      url={url}
      width="100%"
      height="auto"
    />
  );
};

export default VideoScreen;
