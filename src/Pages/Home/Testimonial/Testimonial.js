import React from "react";
import icon from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review/Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Ashraf",
      comment:
        " We were provided excellent customer service. All responses were prompt and professional. Clearly, the upfront statement on our policy stated it was limited which told us that our preliminary research was not well thought out.",
      location: "Gazipur",
      iamge: people1,
    },
    {
      _id: 2,
      name: "Mishal",
      comment:
        " We were provided excellent customer service. All responses were prompt and professional. Clearly, the upfront statement on our policy stated it was limited which told us that our preliminary research was not well thought out.",
      location: "Gazipur",
      iamge: people2,
    },
    {
      _id: 1,
      name: "Nipun",
      comment:
        " We were provided excellent customer service. All responses were prompt and professional. Clearly, the upfront statement on our policy stated it was limited which told us that our preliminary research was not well thought out.",
      location: "Gazipur",
      iamge: people3,
    },
  ];

  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl">What Our Patient Says</h2>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={icon} alt="" />
        </figure>
      </div>
      <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
