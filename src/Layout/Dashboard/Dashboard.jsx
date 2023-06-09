import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseRole from '../../Hooks/UseRole/UseRole';

const Dashboard = () => {

    //const isAdmin = false;
    //const isInstructor = true;
    const [isRole] = UseRole();
    return (
        <div>
            <div className=' bg-slate-100'>
                <div className='flex justify-between items-center flex-col  md:flex-row  container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>



                    {
                        isRole === "admin" && <>
                            <div className='flex'>
                                <a className="btn btn-ghost normal-case text-2xl font-extrabold">Sports Club</a>
                            </div>

                            <div className='mx-2' >
                                <Link to='/' className='mx-2 lg:mx-4'>Home</Link>

                                <Link to='/dashboard/manageClasses' className='mx-2 lg:mx-4'>Manage Classes</Link>

                                <Link to='/dashboard/manageUsers' className='mx-2 lg:mx-4'>Manage Users</Link >



                            </div>
                        </>

                    }
                    {
                        isRole === "instructor" && <>
                            <div className='flex'>
                                <a className="btn btn-ghost normal-case text-2xl font-extrabold">Sports Club</a>
                            </div>

                            <div className='mx-2' >
                                <Link to='/' className='mx-2 lg:mx-4'>Home</Link>

                                <Link to='/dashboard/addAClass' className='mx-2 lg:mx-4'>Add A Class</Link>

                                <Link to='/dashboard/myClasses' className='mx-2 lg:mx-4'>My Classes</Link >



                            </div>
                        </>
                    }

                    {
                        isRole === "student" && <>
                            <div className='flex'>
                                <a className="btn btn-ghost normal-case text-2xl font-extrabold">Sports Club</a>
                            </div>

                            <div className='mx-2' >
                                <Link to='/' className='mx-2 lg:mx-4'>Home</Link>

                                <Link to='/dashboard/mySelClasses' className='mx-2 lg:mx-4'>My Selected Classes</Link>

                                <Link to='/dashboard/myEnrClasses' className='mx-2 lg:mx-4'>My Enrolled Classes</Link >



                            </div>
                        </>
                    }

                    {/* {
                        isInstructor ? <>
                            <div className='flex'>
                                <a className="btn btn-ghost normal-case text-2xl font-extrabold">Sports Club</a>
                            </div>

                            <div className='mx-2' >
                                <Link to='/' className='mx-2 lg:mx-4'>Home</Link>

                                <Link to='/dashboard/addAClass' className='mx-2 lg:mx-4'>Add A Class</Link>

                                <Link to='/dashboard/myClasses' className='mx-2 lg:mx-4'>My Classes</Link >



                            </div>
                        </>
                            :
                            <>
                                <div className='flex'>
                                    <a className="btn btn-ghost normal-case text-2xl font-extrabold">Sports Club</a>
                                </div>

                                <div className='mx-2' >
                                    <Link to='/' className='mx-2 lg:mx-4'>Home</Link>

                                    <Link to='/dashboard/manageClasses' className='mx-2 lg:mx-4'>Manage Classes</Link>

                                    <Link to='/dashboard/manageUsers' className='mx-2 lg:mx-4'>Manage Users</Link >



                                </div>
                            </>
                    } */}




                </div>

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;