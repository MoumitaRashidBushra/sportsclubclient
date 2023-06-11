import React, { useContext } from 'react';
import ShowIntructor from '../../InstructorsPage/ShowIntructor';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';


const InstructorHome = () => {
    const { user, updateUser, loading } = useContext(AuthContext);
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/home')
        return res.json();

    })
    console.log(users)
    return (
        <div>
            <section>
                <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-5 pt-5 '>
                    <h2 className='text-center text-4xl font-bold pt-4 pb-10'> Meet our Popular Instructors!!</h2>
                    <p
                        className='text-center  px-6 pb-16'>Popular sports instructors play a vital role in guiding and mentoring athletes, helping them develop their skills, reach their full potential, and achieve success in their chosen sports. These instructors are not only highly knowledgeable in their respective disciplines but also possess exceptional teaching abilities and a passion for their sport.</p>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10  mb-16 lg:px-20 px-5'>



                        {
                            users.map(instructors => <ShowIntructor
                                key={instructors._id}
                                instructors={instructors}>

                            </ShowIntructor>)
                        }







                    </div>
                </div>
            </section>

        </div>
    );
};

export default InstructorHome;