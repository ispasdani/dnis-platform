import Button from "@/academy-components/Buttons/Button";
import Image from "next/image";
import React from "react";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col ga-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We Provide you
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafter footwear
          is designed to eelvate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-full info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>

        <div className="mt-10">
          <Button label="Show now" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Image
          src={"/academyAssets/images/shoe8.svg"}
          alt="shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
