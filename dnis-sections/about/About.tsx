import TenisVideoPlayer from "@/dnis-components/tenisVideoPlayer/TenisVideoPlayer";
import React from "react";
import Span from "./modules/Span";
import VideoPlayer from "@/dnis-components/videoPlayer/VideoPlayer";
import Shapes from "@/dnis-components/shapes/Shapes";
import { navText } from "@/dnis-constants/navConsts";
import { soMeIcons } from "@/dnis-constants/SoMeIcons";
import Image from "next/image";
import Link from "next/link";
import IconModal from "@/dnis-components/iconModal/IconModal";

const About = () => {
  return (
    <div
      className="w-full min-h-screen font-roboto bg-white text-black grid grid-flow-col grid-cols-1 grid-rows-9 sm:grid-cols-2 sm:grid-rows-5 lg:grid-cols-3 lg:grid-rows-3 gap-2 border-[#e5e7eb]"
      id="dnis-about"
    >
      <div className="border-b sm:border-r flex flex-col justify-between items-start  p-2">
        <h2 className="text-8xl font-bold sm:text-9xl z-10">About</h2>
        <p className="font-bold">A Glimpse Into My Mind</p>
      </div>
      <div className="border-t border-b sm:border-r flex justify-between items-start flex-col p-2">
        <div className="mb-10">
          <h2 className="text-2xl">Primary Expertise Zones</h2>
          <p>Hold and drag. Re-arrange them as you wish.</p>
        </div>
        <div className="flex flex-wrap justify-start items-center">
          <p className="bg-neon-green w-fit px-3 py-0.5 m-2 cursor-pointer">
            JAVA
          </p>
          <p className="bg-neon-green w-fit px-3 py-0.5 m-2 cursor-pointer">
            SpringBoot
          </p>
          <p className="bg-neon-green w-fit px-3 py-0.5 m-2 cursor-pointer">
            C#
          </p>
          <p className="bg-neon-green w-fit px-3 py-0.5 m-2 cursor-pointer">
            .NET
          </p>
          <p className="bg-neon-green w-fit px-3 py-0.5 m-2 cursor-pointer">
            ReactJs
          </p>
          <p className="bg-neon-green w-fit px-3 py-0.5 m-2 cursor-pointer">
            NextJs
          </p>
          <p className="bg-neon-green w-fit px-3 py-0.5 m-2 cursor-pointer">
            ReactNative
          </p>
          <p className="bg-neon-green w-fit px-3 py-0.5 m-2 cursor-pointer">
            Android Studio
          </p>
        </div>
      </div>
      <div className="border-t border-b sm:border-r lg:border-b-0 p-2 flex flex-col justify-between items-start">
        <p className="text-3xl border-b border-neon-green uppercase">
          Follow me here:
        </p>
        <div className="w-full flex flex-wrap justify-between items-center">
          {soMeIcons.map((icon, index) => (
            <div
              key={(index + 493) * 932058}
              className="relative mx-1 hover:-translate-y-1 transition-all ease-linear group/openShow"
            >
              <IconModal label={icon.title} />
              <Link href={icon.link}>
                <Image
                  src={icon.icon}
                  alt={icon.title}
                  width={28}
                  height={28}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-b sm:border-r lg:border-t-0 lg:border-l flex justify-start items-end p-2 relative">
        <p>
          Fun fact about me. This is a long story but I will make it short. I am
          an ex professional <Span />
          who realised that he is not going to be the next Rafael Nadal, so
          dream over.
        </p>
        <div
          className="hidden absolute -bottom-56 left-2/4 -translate-x-2/4 w-[240px] z-10"
          id="video-container"
        >
          <TenisVideoPlayer />
        </div>
      </div>
      <div className="border-t border-b sm:border-r sm:border-b-0 lg:border">
        <VideoPlayer src="/videos/me.mp4" />
      </div>
      <div className="border-b border-t sm:border-t-0 sm:border-l lg:border-b-0 lg:border-t lg:border-r p-2 flex flex-col justify-between">
        <p>
          I am not exagerating when I am saying that most likely more then{" "}
          <span className="font-bold text-black text-lg bg-neon-green px-2 py-1">
            2 Billion
          </span>{" "}
          people engaged with my code.
        </p>
        <p>Maybe you are one of them!!!</p>
      </div>
      <div className="relative border-t border-b sm:border-l lg:border-t-0 p-2 flex justify-start items-start">
        <p className="z-10 mb-10">
          Click around, hold and drag, explore every corner, and see what
          secrets you can uncover. Enjoy the adventure!
        </p>
        <Shapes />
      </div>
      <div className="border-t border-b sm:border-l flex justify-start items-end p-2 bg-neon-green">
        {navText.descSeven}
      </div>
      <div className="border-t sm:border-b sm:border-l lg:border-b-0 flex justify-start items-end p-2">
        <p>
          In addition to my deep technical understanding, I possess strong
          leadership qualities and thrive in high-stress environments. My
          ability to manage teams effectively and deliver projects under tight
          deadlines makes me a versatile asset in any tech-driven setting.
        </p>
      </div>

      {/* This one is just to fill an empty space */}
      <div className="hidden sm:block sm:border-t sm:border-l lg:hidden  p-2">
        10
      </div>
      {/* This one is just to fill an empty space */}
    </div>
  );
};

export default About;
