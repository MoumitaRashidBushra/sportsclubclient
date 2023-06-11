import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const PopularClass = () => {

    // const { user, updateUser, loading } = useContext(AuthContext);
    // const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const res = await fetch('http://localhost:5000/home')
    //     return res.json();

    // })

    return (
        <section>
            <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-5 pt-5 '>
                <h2 className='text-center text-4xl font-bold pt-4 pb-10'>  Our Popular Classes!!</h2>
                <p
                    className='text-center  px-6 pb-16'>Popular classes offer individuals the opportunity to engage in various fitness activities and improve their overall well-being. From high-energy cardio workouts to mind-body practices, these classes cater to a wide range of interests and fitness goals.</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10  mb-16 lg:px-20 px-5'>


                    {/* 
                {
                    users.map(instructors => <ShowIntructor
                        key={instructors._id}
                        instructors={instructors}>

                    </ShowIntructor>)
                } */}







                </div>
            </div>
        </section>
    );
};

export default PopularClass;