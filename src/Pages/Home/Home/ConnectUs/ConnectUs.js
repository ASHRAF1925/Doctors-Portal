import React from "react";
import backgroundImage from "../../../../assets/images/appointment.png";
import PrimaryButton from "../../../../Components/PrimaryButton/PrimaryButton";

const ConnectUs = () => {
  return (
    <section
      className="py-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h4 className="text-lg text-primary font-bold text-center">Appoinment</h4>
      <p className="text-white text-4xl text-center">Stay connected with us</p>

      <form className="w-1/3 mx-auto">
        <div className="form-control ">
          <label className="label"></label>
          <input
            type="text"
            placeholder="Email Address"
            className="input input-bordered"
          />
        </div>
        <div className="form-control ">
          <label className="label"></label>
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered"
          />
        </div>
        <div className="form-control ">
        <label className="label"></label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Your Message Here"
          ></textarea>
        </div>

        <div className="form-control mt-6 w-1/2 mx-auto">
          <PrimaryButton >Submit</PrimaryButton>
        </div>
      </form>
    </section>
  );
};

export default ConnectUs;
