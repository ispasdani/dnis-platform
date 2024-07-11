"use client";

import Button from "@/dnis-components/button/Button";
import FilledBand from "@/dnis-components/filledBand/FilledBand";
import hover3d from "@/utils/hover";
import React, { useRef } from "react";

const Coaching = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  const hoverHeroOne = hover3d(headerRef, { x: 5, y: -5, z: 5 });
  const hoverHeroFour = hover3d(headerRef, { x: 20, y: -14, z: 20 });

  return (
    <div
      className="w-full min-h-screen bg-white p-4 relative"
      ref={headerRef}
      id="academy"
    >
      <div className="w-[500px] h-[500px] animate-scale-up-down delay-300 bg-gradient-to-r absolute top-[20%] left-[10%] from-teal-400 to-yellow-200  rounded-full blur-[90px] z-0" />
      <div className="w-[500px] h-[500px] animate-scale-up-down bg-gradient-to-r absolute top-[30%] left-[35%] from-indigo-400 to-cyan-400 rounded-full blur-[90px] z-0" />

      <div className="w-full h-full z-10 relative backdrop-blur-md bg-white/50">
        <h2 className="text-black font-bold text-8xl sm:text-9xl">ACADEMY</h2>
        <div className="w-full flex justify-between items-center mt-12">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold uppercase">/ YOUR</h2>
            <p className="text-4xl font-bold uppercase">
              Personal <span className="text-coral-red">mentor</span>
            </p>
            <p className="text-4xl font-bold uppercase mb-3">Is here</p>
            <Button
              href="/academy"
              label="Coming Soon"
              iconURL="/dnisAssets/icons/arrow-right.svg"
              backgroundColor="bg-neon-green"
              textColor="text-black"
              backgroundHover="#a8d200"
            />
            <p className="text-lg text-black mt-10 w-full lg:w-3/5">
              Throughout this platform I am offering expert IT coaching
              consultations to help you gain valuable insight and guidance from
              an industry professional.
            </p>
          </div>

          <div
            className="w-[350px] h-[400px] flex-shrink-0 rounded-xl p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-gradient-to-r from-[#cdff00] to-lime-500"
            style={{ transform: hoverHeroFour.transform }}
          >
            ...
          </div>
        </div>
        <div
          className="h-[300px] my-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-xl"
          style={{ transform: hoverHeroOne.transform }}
        >
          ...
        </div>
      </div>
    </div>
  );
};

export default Coaching;
