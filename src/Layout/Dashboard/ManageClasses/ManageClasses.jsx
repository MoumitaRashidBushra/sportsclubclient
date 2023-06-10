import React from 'react';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes');
        return res.data;

    })
    console.log(classes)
    const handleApprove = item => {
        const newItem = { status: "Approved" }

        axiosSecure.patch(`/approved/${item._id}`, newItem)
            .then(data => {
                refetch()
                if (data.data.modifiedCount > 0) {
                    //reset();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Approved Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                }
            })
    }



    const handleDeny = item => {
        const newItem = { status: "Deny" }

        axiosSecure.patch(`/deny/${item._id}`, newItem)
            .then(data => {
                refetch()
                if (data.data.modifiedCount > 0) {
                    //reset();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Deny Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                }
            })
    }

    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>
            <h2 className='text-center text-4xl font-bold pt-8 pb-16'>Please Update the Instructor Classes Information!!!</h2>

            <div className="overflow-x-auto">
                <table className="table table-xs table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Class <br /> Image</th>
                            <th>Class <br /> Name</th>
                            <th>Instructor <br /> Name</th>
                            <th>Instructor <br /> Email</th>
                            <th> Available <br /> Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>Feedback</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            classes.map((item) => <tr key={item._id}>
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
                                <td>{item.availableSeats}</td>
                                <td>{item.price}</td>
                                <td>{item.status}</td>
                                <th>
                                    <button
                                        onClick={() => handleApprove(item)}
                                        disabled={item.status === 'Approved' || item.status === 'Deny'}
                                        className="btn btn-warning btn-xs text-white">Approve</button>
                                </th>
                                <th>
                                    <button
                                        onClick={() => handleDeny(item)}
                                        disabled={item.status === 'Approved' || item.status === 'Deny'}
                                        className="btn btn-error btn-xs text-white">Deny</button>
                                </th>
                                <th>
                                    <Link to={`/dashboard/feedback/${item._id}`}>
                                        <button className="btn btn-info btn-xs text-white">Feedback</button>
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

export default ManageClasses;