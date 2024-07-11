import ReviewCard from "@/academy-components/reviewCard/ReviewCard";
import { reviews } from "@/academy-constants/reviewsConstants";
import React from "react";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard key={(index + 1213) * 2895290} review={review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
