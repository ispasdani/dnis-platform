import React from "react";
import styles from "@/dnis-components/card/styles.module.scss";

type CardProps = {
  title: string;
  selectedWork?: string;
  setSelectedWork: React.Dispatch<React.SetStateAction<string>>;
};

const Card = ({ title, selectedWork, setSelectedWork }: CardProps) => {
  return (
    <div
      className={` flex-shrink-0 w-[140px] p-1 h-auto text-white font-bold mr-3 ml-2 text-center flex flex-col justify-between items-center cursor-pointer ${
        selectedWork?.toLocaleLowerCase() === title.toLocaleLowerCase()
          ? styles.cardContainer
          : styles.cardFilter
      }`}
      onClick={() => setSelectedWork(title)}
    >
      <img
        src={`/dnisAssets/images/${title
          .toLocaleLowerCase()
          .replace(/\s/g, "")}.jpg`}
        className="z-10 bg-cover bg-center w-full h-48 bg-coral-red"
        // style={{
        //   backgroundImage: `url(/dnisAssets/images/${title
        //     .toLocaleLowerCase()
        //     .replace(/\s/g, "")}.jpg)`,
        // }}
      />
      <p className="text-sm mt-1">{title}</p>
    </div>
  );
};

export default Card;
