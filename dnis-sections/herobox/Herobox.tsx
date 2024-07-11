import React from "react";
import dynamic from "next/dynamic";
import { navText } from "@/dnis-constants/navConsts";
import Button from "@/dnis-components/button/Button";

const Scene = dynamic(
  () => import("@/dnis-components/backgroundTorus/BackgroundTorus"),
  {
    ssr: false,
  }
);

const Herobox = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between p-4">
      <div className="absolute top-0 left-0 h-full w-full">
        <Scene />
      </div>
      <div className="w-full h-3/6 z-10 mb-56">
        <div className="w-full flex justify-between items-center">
          <p className="text-8xl font-bold font-roboto sm:text-9xl text-white">
            DA
          </p>
          <p className="text-8xl font-bold font-roboto sm:text-9xl text-white">
            NI
          </p>
        </div>
        <div className="w-full flex justify-between items-center pt-4">
          <p className="text-8xl font-bold font-roboto sm:text-9xl text-white">
            DE
          </p>
          <p className="text-8xl font-bold font-roboto sm:text-9xl text-white">
            V
          </p>
        </div>
      </div>
      <div className="w-full md:w-3/6 h-3/6 z-10 text-base sm:text-lg text-white mb-10">
        <p>
          <span className="text-2xl font-bold mr-2 text-neon-green">
            {navText.descOne}
          </span>
          {navText.descTwo}
        </p>
        <br />
        <p>
          {navText.descThree}
          <span className="mx-2 font-bold text-neon-green">
            {navText.descFour}
          </span>
          {navText.descFive}
        </p>
        <br />
        <p>{navText.descSix}</p>
        <br />
        <Button
          href="#dnis-about"
          label="Find out more"
          iconURL="/dnisAssets/icons/arrow-right.svg"
        />
      </div>
    </section>
  );
};

export default Herobox;
