import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useTitle from '../../../Hooks/useTitle';

const MyEnrolledClasses = () => {
    useTitle('MyEnrolledClasses');


    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: myClass = [], refetch } = useQuery(['myClass'], async () => {

        const res = await axiosSecure.get(`/enrolled/${user.email}`);
        return res.data;


    })


    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>
            <h2 className='text-center text-4xl font-bold pt-8 pb-16'> My Enrolled Classes Information!!!</h2>

            <div className="overflow-x-auto">
                <table className="table table-xs table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Class <br /> Image</th>
                            <th>Class <br /> Name</th>
                            <th>Instructor <br /> Name</th>
                            <th>Instructor <br /> Email</th>

                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            myClass.map((item) => <tr key={item._id}>
                                <td>
                                    <div className=" w-24 h-24">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </td>

                                <td>
                                    {item.className}

                                </td>
                                <td>{item.instructorName}</td>
                                <td>{item.instructorEmail}</td>


                                <td>{item.price}</td>




                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;