import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import ShowClasses from './ShowClasses';
import useTitle from '../../Hooks/useTitle';

const ClassesPage = () => {
    useTitle('Classes');
    const { user, updateUser, loading } = useContext(AuthContext);
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('https://sports-club-server.vercel.app/showclasses')
        return res.json();

    })
    return (
        <div>
            <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-10 pt-10 '>
                <h2 className='text-center text-4xl font-bold pt-8 pb-16'>Welcome to our band new classes!!</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10  mb-16 lg:px-20 px-5'>
                    {

                        classes.map(cp => <ShowClasses
                            key={cp._id}
                            cp={cp}

                        ></ShowClasses>)

                    }



                </div>
            </div>
        </div>
    );
};

export default ClassesPage;