import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';

const MyClasses = () => {

    useTitle('MyClasses');


    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: myClass = [], refetch } = useQuery(['myClass'], async () => {

        const res = await axiosSecure.get(`/myclass/${user.email}`);
        return res.data;


    })


    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>
            <h2 className='text-center text-4xl font-bold pt-8 pb-16'> My Classes Information!!!</h2>

            <div className="overflow-x-auto">
                <table className="table table-xs table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Class <br /> Image</th>
                            <th>Class <br /> Name</th>

                            <th> Available <br /> Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Total Enrolled <br /> Students,</th>
                            <th>Feedback</th>
                            <th>Update</th>

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

                                <td>{item.availableSeats}</td>
                                <td>{item.price}</td>
                                <td>{item.status}</td>
                                <td>{item.enrolled}</td>
                                <td>{item.feedback}</td>
                                <th>

                                    <Link
                                        to={`/dashboard/updateinfo/${item._id}`}>
                                        <button className="btn btn-warning btn-xs text-white">Update</button>
                                    </Link>

                                </th>


                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClasses;