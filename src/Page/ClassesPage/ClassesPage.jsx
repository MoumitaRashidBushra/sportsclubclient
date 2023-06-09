import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import ShowClasses from './ShowClasses';

const ClassesPage = () => {
    const { user, updateUser, loading } = useContext(AuthContext);
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json();

    })
    return (
        <div>
            <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-10 pt-10 '>
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