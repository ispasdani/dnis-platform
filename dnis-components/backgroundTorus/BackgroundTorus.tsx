"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./modules/Model";
import { Environment } from "@react-three/drei";
import { Leva } from "leva";

const BackgroundTorus = () => {
  return (
    <>
      <Leva hidden />
      <Canvas style={{ backgroundColor: "#000000" }}>
        <Model />
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset="city" />
      </Canvas>
    </>
  );
};

export default BackgroundTorus;
