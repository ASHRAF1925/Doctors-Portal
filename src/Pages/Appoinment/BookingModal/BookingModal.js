import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selctedDate,settreatment }) => {
  const { name, slots } = treatment;
  const treatmentName=name;
  console.log(slots);
  const date = format(selctedDate, "PP");

const handleBooking=event=>{
    event.preventDefault();
    const form=event.target;
    const slot=form.slot.value;
    const name=form.name.value;
    const email=form.email.value;
    const phone=form.phone.value;
    console.log(date,slot,name,email,phone)
    const booking={
        appoinmentDate :date,
       patient: name,
        slot,
        email,
        phone,
        treatment:treatmentName,
    }

    //send data to server close modal display toast
    console.log(booking)
    settreatment(null);


}



  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="grid grid-cols-1 gap-3 mt-10" onSubmit={handleBooking}>
            <input
              type="text"
              disabled
              placeholder={date}
              className="input w-full input-bordered "
            />
            <select name="slot" className="select select-bordered w-full ">
            
              {
                slots.map((slot,index)=>  <option key={index} value={slot}>
                    
                   {slot}
                  </option>)
              }
           
            </select>
            <input
            name='name'
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered "
            />
            <input
            name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered "
            />
            <input
            name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered "
            />
            <br />
            <input
              className="btn btn-accent w-full max-w-xs"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
