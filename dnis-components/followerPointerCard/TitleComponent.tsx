import React from "react";
import Image from "next/image";

export const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="30"
      width="30"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p className="text-white text-md pr-2">{title}</p>
  </div>
);
