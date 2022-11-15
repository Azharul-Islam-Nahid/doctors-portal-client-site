import React from 'react';
import Banner from './Banner/Banner';
import background from '../../assets/images/bg.png'
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import Banner2 from './Banner2/Banner2';
import MakeAppoinitment from './MakeAppoinitment/MakeAppoinitment';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mt-5' style={{ 'backgroundImage': `url(${background})` }}>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Banner2></Banner2>
            <MakeAppoinitment></MakeAppoinitment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;