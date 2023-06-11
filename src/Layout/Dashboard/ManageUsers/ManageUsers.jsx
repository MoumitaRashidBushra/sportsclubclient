import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const { data: manage = [], refetch } = useQuery([' manage'], async () => {
        const res = await fetch('https://sports-club-server.vercel.app/users')
        return res.json();

    })
    console.log(manage)

    const handleToMakeAdmin = user => {
        fetch(`https://sports-club-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!!!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleToMakeInstructor = user => {
        fetch(`https://sports-club-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!!!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className=" container lg:container  lg:mx-auto px-10 lg:px-20 ">
            <h3 className="text-3xl font-semibold my-4 text-center">Total Users: {manage.length}</h3>


            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manage?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'Admin' :
                                    <button
                                        onClick={() => handleToMakeAdmin(user)}
                                        className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td>{user.role === 'instructor' ? 'Instructor' :
                                    <button
                                        onClick={() => handleToMakeInstructor(user)}
                                        className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button>
                                }</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;