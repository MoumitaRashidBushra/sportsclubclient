import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MySelectedClasses = () => {

    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: select = [], refetch } = useQuery(['select'], async () => {

        const res = await axiosSecure.get(`/select/${user.email}`);
        return res.data;


    })
    //console.log(select)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sports-club-server.vercel.app/select/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }





    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>
            <h2 className='text-center text-4xl font-bold pt-8 pb-16'> My Selected Classes Information!!!</h2>

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
                            <th>Delete</th>
                            <th>Pay</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            select.map((item) => <tr key={item._id}>
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

                                <th>
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn btn-warning btn-xs text-white">Delete</button>
                                </th>
                                <th>
                                    <Link
                                        to={`/dashboard/payment/${item._id}`}>
                                        <button className="btn btn-info btn-xs text-white">Pay</button>
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

export default MySelectedClasses;