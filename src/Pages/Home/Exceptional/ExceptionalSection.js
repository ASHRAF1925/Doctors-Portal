import React from "react";
import img from "../../../assets/images/treatment.png";

const ExceptionalSection = () => {
  return (
    <section className="mt-10 ">
      <div className="card w-2/3  mx-auto lg:card-side bg-base-100 shadow-xl ">
        <figure className="w-2/4">
          <img  src={img} alt="Album" />
        </figure>
        <div className="card-body w-1/2  my-auto">
          <h2 className="card-title text-center font-bold text-5xl">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>

          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-36 mt-5">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default ExceptionalSection;
