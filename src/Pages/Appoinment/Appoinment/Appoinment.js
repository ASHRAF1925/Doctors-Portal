import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments';

const Appoinment = () => {
    const[selctedDate,setselectedDate]=useState(new Date());
    
    return (
        <div>
            <AppoinmentBanner selctedDate={selctedDate} setselectedDate={setselectedDate}></AppoinmentBanner>
            <AvailableAppoinments selctedDate={selctedDate} ></AvailableAppoinments>
        </div>
    );
};

export default Appoinment;