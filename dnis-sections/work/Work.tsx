import React from "react";
import WorkStateHolder from "./modules/WorkStateHolder";

const Work = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col justify-between items-start p-4"
      id="work"
    >
      <div>
        <h2 className="text-white font-bold text-8xl sm:text-9xl">Work</h2>
        <p className="text-white w-full lg:w-3/5 mb-10 mt-5">
          Within this section, I proudly showcase collaborations with several
          prestigious companies where my contributions have significantly
          impacted user engagement and success while reaching millions. These
          partnerships represent a testament to my expertise and ability to
          drive meaningful results in diverse environments.
        </p>
        <p className="text-white w-full lg:w-3/5 mb-10 mt-5">
          Unfortunately, because every company copyrights policies. I cannot use
          their logo without submitting a request. Something that I already did
          a few weeks ago ...
        </p>
        <p className="text-neon-green w-full lg:w-3/5 mb-10 mt-5">
          So I decided to use some covers from my personal selection of "Must
          read in this life" books.
        </p>
      </div>
      <WorkStateHolder />
    </section>
  );
};

export default Work;
