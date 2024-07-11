import React from "react";
import styles from "@/dnis-components/filledBand/styles.module.scss";
import { text } from "stream/consumers";

type FilledBandProps = {
  transform?: string;
  left?: string;
  textOne?: string;
  textTwo?: string;
  textThree?: string;
  textFour?: string;
  bkgColor?: string;
};

const FilledBand = ({
  transform,
  left,
  textOne,
  textTwo,
  textThree,
  textFour,
  bkgColor,
}: FilledBandProps) => {
  return (
    <div
      className={`${styles.filledBand} font-montserrat`}
      style={{
        transform: transform,
        left: left,
        backgroundColor: bkgColor ? bkgColor : "",
      }}
    >
      <div style={{ backgroundColor: bkgColor ? bkgColor : "" }}>
        {textOne ? textOne : "TRY AGAIN"}!
        <span> {textTwo ? textTwo : "Fail more!"} </span>
        {textThree ? textThree : "FAIL BETTER!"}
        <span>{textFour ? textFour : "Chase your dreams!"}</span>
      </div>
      <div style={{ backgroundColor: bkgColor ? bkgColor : "" }}>
        {textOne ? textOne : "TRY AGAIN"}!
        <span> {textTwo ? textTwo : "Fail more!"} </span>
        {textThree ? textThree : "FAIL BETTER!"}
        <span>{textFour ? textFour : "Chase your dreams!"}</span>
      </div>
    </div>
  );
};

export default FilledBand;
