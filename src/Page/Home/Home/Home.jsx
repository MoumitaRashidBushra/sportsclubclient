import React from 'react';
import Slider from '../Slider/Slider';
import Banner from '../Banner/Banner';

import InstructorHome from './InstructorHome';
import PopularClass from './PopularClass';
import Contact from '../Contact';
import useTitle from '../../../Hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <InstructorHome></InstructorHome>
            <Contact></Contact>
        </div>
    );
};

export default Home;