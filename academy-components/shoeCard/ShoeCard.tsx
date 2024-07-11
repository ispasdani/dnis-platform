import React from "react";
import Image from "next/image";

interface ImgURLProps {
  thumbnail: string;
  bigShoe: string;
}

type ShoeCardProps = {
  imgURL: ImgURLProps;
  changeBigShoeImage: React.Dispatch<React.SetStateAction<string>>;
  bigShoeImg: string;
};

const ShoeCard = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImg,
}: ShoeCardProps) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl cursor-pointer z-20 ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imgURL.thumbnail}
          alt="Shoe Collection Thumbnail"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
