import Button from "@/academy-components/Buttons/Button";
import Image from "next/image";
import React from "react";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <Image
          src={"/academyAssets/images/offer.svg"}
          width={773}
          height={687}
          className="object-contain w-full"
          alt="offer"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafter footwear
          is designed to eelvate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-full info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            label="Shop now"
            iconURL="/academyAssets/icons/arrow-right.svg"
          />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
