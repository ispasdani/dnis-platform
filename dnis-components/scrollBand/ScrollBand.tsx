"use client";

import React from "react";
import styles from "@/dnis-components/scrollBand/styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

type ScrollBandProps = {
  directionX: string;
  justifyContent?: string;
  text: string;
  iconHex: string;
  backgroundColor?: string;
  textColor?: string;
};

function ScrollBand({
  directionX,
  justifyContent,
  text,
  iconHex,
  backgroundColor,
  textColor,
}: ScrollBandProps) {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, directionX]);

  return (
    <div
      className={`font-zenDots font-bold ${styles.scrollBand}`}
      style={{
        justifyContent: justifyContent,
        backgroundColor: backgroundColor ? backgroundColor : "#cdff00",
      }}
    >
      <motion.p
        className={styles.motionText}
        style={{
          x: x,
          color: textColor ? textColor : "",
          WebkitTextStroke: textColor ? textColor : "",
        }}
      >
        <span>{text}</span>
        <span className="font-normal">{iconHex}</span>
        <span>{text}</span>
        <span className="font-normal">{iconHex}</span>
      </motion.p>
    </div>
  );
}

export default ScrollBand;
