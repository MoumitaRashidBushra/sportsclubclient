import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navber = () => {


    const { user, logout } = useContext(AuthContext);

    const handleToLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error));

    }


    return (
        <div>
            <div className=' bg-slate-100'>
                <div className='flex justify-between items-center flex-col  md:flex-row  container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>
                    <div className='flex'>


                        <a className="btn btn-ghost normal-case text-2xl font-extrabold">Sports Club</a>
                    </div>

                    <div className='mx-2' >

                        <Link to='/' className='mx-2 lg:mx-4'>Home</Link>

                        <Link to='instructors' className='mx-2 lg:mx-4'>Instructors</Link >
                        <Link to='classes' className='mx-2 lg:mx-4'>Classes</Link>

                        {
                            user ?
                                <>
                                    <Link to='dashboard' className='mx-2 lg:mx-4'>Dashboard</Link>


                                </>
                                :

                                ""
                        }


                    </div>

                    <div className='flex justify-between items-center flex-col  md:flex-row gap-4'>
                        {
                            user && <div className="tooltip" data-tip={user?.displayName}>
                                <img className='w-16 rounded-full' src={user?.photoURL} />
                            </div>
                        }

                        <div>

                            {
                                user ?
                                    <>

                                        <Link onClick={handleToLogout} className='btn btn-info px-3 text-white'>Logout</Link >
                                    </>
                                    :

                                    <Link to='/login' className='btn btn-info px-3 text-white'>Login</Link >
                            }
                        </div>




                    </div>



                </div>
            </div>
        </div>
    );
};

export default Navber;