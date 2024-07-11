"use client";

import React from "react";

const Span = () => {
  return (
    <span
      className="font-bold cursor-pointer"
      onMouseEnter={() =>
        document.getElementById("video-container")?.classList.remove("hidden")
      }
      onMouseLeave={() =>
        document.getElementById("video-container")?.classList.add("hidden")
      }
    >
      tennis player{" "}
    </span>
  );
};

export default Span;
