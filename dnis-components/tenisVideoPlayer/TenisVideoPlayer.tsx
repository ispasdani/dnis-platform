import React from "react";

const TenisVideoPlayer = () => {
  return (
    <video loop autoPlay muted>
      <source src="/videos/tenis.mp4" type="video/mp4" />
    </video>
  );
};

export default TenisVideoPlayer;
