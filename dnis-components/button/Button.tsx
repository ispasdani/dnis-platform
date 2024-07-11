"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

type ButtonProps = {
  label: string;
  iconURL?: string;
  fullWidth?: boolean;
  href?: string;
  backgroundColor?: string;
  textColor?: string;
  backgroundHover?: string;
  borderColor?: string;
};

const Button = ({
  label,
  iconURL,
  fullWidth,
  href,
  backgroundColor,
  borderColor,
  backgroundHover,
  textColor,
}: ButtonProps) => {
  useEffect(() => {
    console.log(`hover:bg-[${backgroundHover}]`);
  }, []);

  return (
    <Link href={href ? href : ""} className="max-w-[200px]">
      <button
        className={`flex justify-center items-center gap-2 px-7 py-3 border font-montserrat text-base leading-none rounded-full ${
          fullWidth && "w-full"
        } 
        ${backgroundColor ? backgroundColor : "transparent"} 
        ${borderColor ? borderColor : "border-neon-green"}
        ${
          backgroundHover
            ? `hover:bg-[${backgroundHover}]`
            : "hover:bg-neon-green"
        }
        ${textColor ? textColor : "text-white "} 
        hover:text-black transition-all ease-in-out group/arrowRotate`}
      >
        {label}
        {iconURL && (
          <Image
            src={iconURL}
            alt="Arrow right icon"
            className="group-hover/arrowRotate:rotate-90 ml-2 rounded-full w-5 h-5 transition-all ease-in-out"
            width={20}
            height={20}
          />
        )}
      </button>
    </Link>
  );
};

export default Button;
