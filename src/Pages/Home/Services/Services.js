import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whiteening from '../../../assets/images/whitening.png'
import Service from './Service';



const Services = () => {
    const serviceData=[
        {
            id:1,
            name:'Fluoride Treatment',
            description:'We provide Fluoride Services',
            img : fluoride

        }
        ,
        {
            id:2,
            name:'Cavity Filling',
            description:'We provide Cavity Services',
            img : fluoride

        },
        {
            id:2,
            name:'Teeth Whitening ',
            description:'We provide Whitening Services',
            img : fluoride

        }
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'><h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
            <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
                
            </div>

        </div>
    );
};

export default Services;