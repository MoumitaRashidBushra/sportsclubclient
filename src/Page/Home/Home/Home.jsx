import React from 'react';
import Slider from '../Slider/Slider';
import Banner from '../Banner/Banner';

import InstructorHome from './InstructorHome';
import PopularClass from './PopularClass';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <InstructorHome></InstructorHome>
        </div>
    );
};

export default Home;