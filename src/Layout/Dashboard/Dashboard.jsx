import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className=' bg-slate-100'>
                <div className='flex justify-between items-center flex-col  md:flex-row  container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>
                    <div className='flex'>


                        <a className="btn btn-ghost normal-case text-2xl font-extrabold">Sports Club</a>
                    </div>

                    <div className='mx-2' >
                        <Link to='/' className='mx-2 lg:mx-4'>Home</Link>

                        <Link to='/dashboard/manageClasses' className='mx-2 lg:mx-4'>Manage Classes</Link>

                        <Link to='/dashboard/manageUsers' className='mx-2 lg:mx-4'>Manage Users</Link >



                    </div>



                </div>

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;