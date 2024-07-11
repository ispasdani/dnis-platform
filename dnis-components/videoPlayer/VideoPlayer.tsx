"use client";

import React, { useRef, useState } from "react";

type VideoPlayerProps = {
  src: string;
  ctrlButtonSvg?: string;
  ctrlButtonBorder?: string;
};

const VideoPlayer = ({
  src,
  ctrlButtonBorder,
  ctrlButtonSvg,
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full h-full relative">
      <video loop autoPlay muted ref={videoRef} className="h-full object-cover">
        <source src={src} type="video/mp4" />
      </video>
      <button
        onClick={togglePlay}
        className={`absolute bottom-3 right-3 h-12 w-12 border ${
          ctrlButtonBorder ? ctrlButtonBorder : "border-white-300"
        } rounded-full flex justify-center items-center`}
      >
        {isPlaying ? (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14V0H14V14H8ZM0 14V0H6V14H0ZM10 12H12V2H10V12ZM2 12H4V2H2V12Z"
              fill={`${ctrlButtonSvg ? ctrlButtonSvg : "white"}`}
            />
          </svg>
        ) : (
          <svg
            width="11"
            height="14"
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14V0L11 7L0 14ZM2 10.35L7.25 7L2 3.65V10.35Z"
              fill={`${ctrlButtonSvg ? ctrlButtonSvg : "white"}`}
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default VideoPlayer;
