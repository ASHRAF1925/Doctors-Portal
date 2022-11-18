import React from 'react';
import Banner from '../Banner/Banner';
import ExceptionalSection from '../Exceptional/ExceptionalSection';

import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div className='mx-5 ' >
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalSection></ExceptionalSection>
        </div>
    );
};

export default Home;