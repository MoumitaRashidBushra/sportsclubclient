import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseRole from '../../Hooks/UseRole/UseRole';
import { AuthContext } from '../../Provider/AuthProvider';
import Dashber from './Dashber/Dashber';
import useTitle from '../../Hooks/useTitle';

const Dashboard = () => {
    useTitle('Dashboard');

    //const isAdmin = false;
    //const isInstructor = true;
    const { user } = useContext(AuthContext)

    return (
        <div>
            <Dashber></Dashber>

            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;