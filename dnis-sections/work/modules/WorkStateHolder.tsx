"use client";

import Card from "@/dnis-components/card/Card";
import { workConsts, workTitles } from "@/dnis-constants/workConsts";
import React, { useState } from "react";
import styles from "@/dnis-sections/work/styles.module.scss";
import Image from "next/image";

const WorkStateHolder = () => {
  const [selectedWork, setSelectedWork] = useState<string>("fifa");

  console.log(selectedWork.toLocaleLowerCase().replace(/\s/g, ""));

  return (
    <>
      <div
        className={`w-full h-72 flex justify-start py-3 items-start overflow-x-scroll scrollbar-styled ${styles.scrollbarStyled}`}
      >
        {workTitles.EN.map((item, index) => (
          <Card
            key={(index + 5693) * 25509}
            title={item.title}
            selectedWork={selectedWork}
            setSelectedWork={setSelectedWork}
          />
        ))}
      </div>

      <div className="w-full mt-10 mb-14">
        {workConsts.EN.map((workItem, index) => (
          <div
            key={(index + 53980) * 5892}
            className={`w-full flex flex-col md:flex-row ${
              workItem.title.toLocaleLowerCase() ===
              selectedWork.toLocaleLowerCase()
                ? "block"
                : "hidden"
            }`}
          >
            <Image
              src={`/dnisAssets/images/${workItem.title
                .toLocaleLowerCase()
                .replace(/\s/g, "")}.jpg`}
              alt={`Selected work item ${workItem.title}`}
              width={300}
              height={400}
              className="flex-shrink-0 h-[400px] bg-cover bg-center"
            />
            <div className="flex flex-col py-3 px-10 text-white">
              <p className="mb-4 font-bold text-2xl">{workItem.title}</p>
              {workItem.description && (
                <p className="mb-5">{workItem.description}</p>
              )}
              {workItem.descriptionTwo && (
                <p className="mb-5">{workItem.descriptionTwo}</p>
              )}
              {workItem.descriptionThree && (
                <p className="mb-5">{workItem.descriptionThree}</p>
              )}
              {workItem.descriptionFour && (
                <p className="mb-5">{workItem.descriptionFour}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkStateHolder;
