import React from 'react';
import { Link } from 'react-router-dom';
import UseRole from '../../../Hooks/UseRole/UseRole';
import { FaHome, FaUsers, FaMoneyCheckAlt, FaBook, FaAddressCard } from 'react-icons/fa';

const Dashber = () => {
    const [isRole] = UseRole();
    return (
        <div className=' bg-slate-100'>
            <div className='flex justify-between items-center flex-col  md:flex-row  container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>



                {
                    isRole === "admin" && <>
                        <div className='flex'>
                            <a className="btn btn-ghost normal-case text-2xl font-extrabold">Sports Club</a>
                        </div>

                        <div className='mx-auto flex' >

                            <Link to='/' className='mx-2 lg:mx-4'><FaHome></FaHome>Home</Link>


                            <Link to='/dashboard/manageClasses' className='mx-2 lg:mx-4'><FaUsers></FaUsers> Manage Classes</Link>

                            <Link to='/dashboard/manageUsers' className='mx-2 lg:mx-4'><FaUsers></FaUsers>Manage Users</Link >



                        </div>
                    </>

                }
                {
                    isRole === "instructor" && <>
                        <div className='flex'>
                            <a className="btn btn-ghost normal-case text-2xl font-extrabold">Sports Club</a>
                        </div>

                        <div className='mx-auto flex' >
                            <Link to='/' className='mx-2 lg:mx-4'><FaHome></FaHome>Home</Link>

                            <Link to='/dashboard/addAClass' className='mx-2 lg:mx-4'><FaAddressCard></FaAddressCard> Add A Class</Link>

                            <Link to='/dashboard/myClasses' className='mx-2 lg:mx-4'><FaBook></FaBook> My Classes</Link >



                        </div>
                    </>
                }

                {
                    isRole === "student" && <>
                        <div className='flex'>
                            <a className="btn btn-ghost normal-case text-2xl font-extrabold">Sports Club</a>
                        </div>

                        <div className='mx-auto flex' >
                            <Link to='/' className='mx-2 lg:mx-4'><FaHome></FaHome>Home</Link>

                            <Link to='/dashboard/mySelClasses' className='mx-2 lg:mx-4'>
                                <FaBook></FaBook> My Selected Classes</Link>

                            <Link to='/dashboard/myEnrClasses' className='mx-2 lg:mx-4'>  <FaBook></FaBook>My Enrolled Classes</Link >

                            <Link to='/dashboard/paymentHistory' className='mx-2 lg:mx-4'>  <FaMoneyCheckAlt></FaMoneyCheckAlt> Payment History</Link >




                        </div>
                    </>
                }






            </div>

        </div>
    );
};

export default Dashber;