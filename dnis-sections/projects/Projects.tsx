"use client";

import { FollowerPointerCard } from "@/dnis-components/followerPointerCard/FollowerPointerCard";
import { TitleComponent } from "@/dnis-components/followerPointerCard/TitleComponent";
import { HeroHighlight } from "@/dnis-components/heroHighlight/HeroHighlight";
import { LinkPreview } from "@/dnis-components/linkPreview/LinkPreview";
import { MovingButton } from "@/dnis-components/movingBorder/MovingBorder";
import VideoPlayer from "@/dnis-components/videoPlayer/VideoPlayer";
import { avatars } from "@/dnis-constants/avatars";
import Image from "next/image";
import React, { useState } from "react";

const Projects = () => {
  const [avatar, setAvatar] = useState("/dnisAssets/avatars/avatar1.png");

  return (
    <FollowerPointerCard
      title={<TitleComponent title={"User"} avatar={avatar} />}
    >
      <HeroHighlight>
        <div
          className="w-full flex flex-col lg:flex-row justify-between"
          id="projects"
        >
          <h2 className="text-black font-bold text-6xl sm:text-9xl">
            Projects
          </h2>
          <div className="flex mt-10 lg:mt-0">
            {avatars.map((avatar) => (
              <Image
                src={avatar}
                width={45}
                height={45}
                alt="avatar icon"
                className="w-[45px] h-[45px] rounded-full mx-2 cover hover:scale-125 duration-200 transition-all"
                onClick={() => setAvatar(avatar)}
              />
            ))}
          </div>
        </div>

        <div className="w-full min-h-[50vh] mt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="relative w-full max-w-[800px] h-full max-h-[600px] bg-blue-200">
            <VideoPlayer
              src="/videos/pixelfy.mp4"
              ctrlButtonBorder="border-black"
              ctrlButtonSvg="black"
            />
          </div>
          <div className="px-5 flex flex-col">
            <p className="text-black dark:text-neutral-400 text-lg md:text-xl lg:text-xl max-w-2xl mx-auto text-center md:text-start my-10">
              Developed{" "}
              <LinkPreview
                url="https://pixelfy-ai.com"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-600"
              >
                Pixelfy-AI,
              </LinkPreview>{" "}
              a web application offering AI-powered image editing
              functionalities, including Image Restore, Generative Fill, Object
              Remove, Object Recolor, Object Replace, Background Remove, Image
              Generation, and Logo Creation. Pixelfy-AI allows users to pay per
              action without the need for a subscription, addressing the need
              for affordable, flexible image editing solutions.
            </p>
          </div>
        </div>

        <div className="w-full min-h-[50vh] mt-10 flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="px-5 flex flex-col">
            <p className="text-black dark:text-neutral-400 text-lg md:text-xl lg:text-xl max-w-2xl mx-auto text-center md:text-start my-10">
              Developed{" "}
              <LinkPreview
                url="https://audiofy-ai.com"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-600"
              >
                Audiofy-AI,
              </LinkPreview>{" "}
              a web application that converts text into audio using a variety of
              voice types. Users can generate audiobooks, podcasts, learning
              materials, and more. Designed to cater to those who prefer
              listening over reading, Audiofy-AI provides an accessible solution
              for multitasking and auditory learning, benefiting individuals who
              learn better through listening.
            </p>
          </div>

          <div className="relative w-full max-w-[800px] h-full max-h-[600px] bg-blue-200">
            <VideoPlayer src="/videos/audiofy.mp4" />
          </div>
        </div>

        <div className="w-full min-h-[50vh] mt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="relative w-full max-w-[800px] h-full max-h-[600px] bg-blue-200">
            <VideoPlayer
              src="/videos/sumly.mp4"
              ctrlButtonBorder="border-black"
              ctrlButtonSvg="black"
            />
          </div>
          <div className="px-5 flex flex-col">
            <p className="text-black dark:text-neutral-400 text-lg md:text-xl lg:text-xl max-w-2xl mx-auto text-center md:text-start my-10">
              Created{" "}
              <LinkPreview
                url="https://sumly-ai.com"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-600"
              >
                Sumly-AI,
              </LinkPreview>{" "}
              a versatile web application that provides concise summaries of
              various content types, including web pages, YouTube videos, long
              texts, and documents. Additionally, it features a text grammar
              checker and more. Sumly-AI was developed to streamline the
              information retrieval process, enabling users to quickly access
              key points without sifting through extensive text.
            </p>
          </div>
        </div>

        <div className="w-full min-h-[50vh] mt-10 flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="px-5 flex flex-col">
            <p className="text-black dark:text-neutral-400 text-lg md:text-xl lg:text-xl max-w-2xl mx-auto text-center md:text-start my-10">
              Developed{" "}
              <LinkPreview
                url="https://atlas-chat.com"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-600"
              >
                Atlas.Chat,
              </LinkPreview>{" "}
              a web application that facilitates seamless communication across
              different languages. Users can select their native language and
              receive messages translated in real-time, eliminating the need to
              use external translation tools. Atlas.Chat allows users to
              communicate freely in their native language, with messages
              automatically translated for recipients in their own native
              language, promoting effortless and inclusive global conversations.
            </p>
          </div>

          <div className="relative w-full max-w-[800px] h-full max-h-[600px] bg-blue-200">
            <VideoPlayer src="/videos/atlas.mp4" />
          </div>
        </div>
      </HeroHighlight>
    </FollowerPointerCard>
  );
};

export default Projects;
