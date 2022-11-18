import React from 'react';
import Banner from '../Banner/Banner';
import ExceptionalSection from '../Exceptional/ExceptionalSection';

import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import ConnectUs from './ConnectUs/ConnectUs';
import MakeAppoinment from './MakeAppoinment/MakeAppoinment';


const Home = () => {
    return (
        <div className='mx-5 ' >
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalSection></ExceptionalSection>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <ConnectUs></ConnectUs>
        </div>
    );
};

export default Home;