import React from 'react';

const MyClasses = () => {
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

                        {/* {
                            classes.map((item) => <tr key={item._id}>
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
                                <th>
                                    <button
                                        onClick={() => handleApprove(item)}
                                        className="btn btn-warning btn-xs text-white">Approve</button>
                                </th>
                                <th>
                                    <button className="btn btn-error btn-xs text-white">Deny</button>
                                </th>
                                <th>
                                    <button className="btn btn-info btn-xs text-white">Feedback</button>
                                </th>

                            </tr>)
                        } */}
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>





                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClasses;