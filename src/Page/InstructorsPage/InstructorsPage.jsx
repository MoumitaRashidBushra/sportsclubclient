import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ShowIntructor from './ShowIntructor';

const InstructorsPage = () => {
    const { user, updateUser, loading } = useContext(AuthContext);
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/instructor')
        return res.json();

    })
    return (
        <div>
            <section>
                <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-10 pt-10 '>
                    <h2 className='text-center text-4xl font-bold pt-8 pb-16'> All Instructor!!</h2>
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

export default InstructorsPage;