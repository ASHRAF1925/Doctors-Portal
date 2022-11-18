import React, { useState } from "react";
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from "date-fns/esm";
 import image from '../../../assets/images/bg.png'

const AppoinmentBanner = ({selctedDate,setselectedDate}) => {

  return (
    <header style={{ 
        backgroundImage: `url(${image})`,
        backgroundSize:'contain' ,
        backgroundRepeat:'no-repeat'
      }} className="my-6">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt=''
            className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div className="mr-6">
            <DayPicker
            mode="single"
            selected={selctedDate}
            onSelect={setselectedDate}
            
            ></DayPicker>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
