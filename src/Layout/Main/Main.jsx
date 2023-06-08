import React from 'react';
import Navber from '../../SharedPage/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../../SharedPage/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;