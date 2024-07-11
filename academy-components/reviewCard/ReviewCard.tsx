import Image from "next/image";
import React from "react";

interface ReviewProps {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

type ReviewCardProps = {
  review: ReviewProps;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={review.imgURL}
        alt={review.customerName}
        className="rounded-full object-cover"
        width={120}
        height={120}
      />
      <p className="mt-6 max-w-sm text-center info-text">{review.feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <Image
          src={"/academyAssets/icons/star.svg"}
          alt="star icon"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">
          {review.rating}
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {review.customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
