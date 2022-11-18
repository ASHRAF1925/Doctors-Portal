import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppoinmentOption from './AppoinmentOption';

const AvailableAppoinments = ({selctedDate}) => {
    const [appoinmentOptions,setappoinmentOptions]=useState([]);
    const[treatment,settreatment]=useState(null);
    

    useEffect(()=>{
        fetch('appoinmentOptions.json')
        .then(res=>res.json())
        .then(data=>setappoinmentOptions(data))
    },[])
    console.log(appoinmentOptions)
    
    return (
        <section className='mt-16'>
            <h4 className="text-lg text-secondary font-bold text-center">Available Appointments on { format( selctedDate,'PP')}</h4>
            <div className='grid mt-6 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appoinmentOptions.map(options=><AppoinmentOption
                    key={options._id}
                    options={options}
                    settreatment={settreatment}
                    ></AppoinmentOption>)
                }

            </div>
         {
            treatment &&
            <BookingModal
            selctedDate={selctedDate}
            treatment={treatment}
            settreatment={settreatment}
            ></BookingModal>
         }
        </section>
    );
};

export default AvailableAppoinments;