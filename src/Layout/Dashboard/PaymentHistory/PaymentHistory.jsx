import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useTitle from '../../../Hooks/useTitle';

const PaymentHistory = () => {

    useTitle('PaymentHistory');

    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: select = [], refetch } = useQuery(['select'], async () => {

        const res = await axiosSecure.get(`/payments/${user.email}`);
        return res.data;


    })
    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>
            <h2 className='text-center text-4xl font-bold pt-10 pb-16'>Here is your payment details!!!</h2>

            <div className="overflow-x-auto">
                <table className="table table-xs table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th> transaction ID </th>


                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            select.map((item) => <tr key={item._id}>
                                <td>
                                    <div className=" w-24 h-24">
                                        <img src={item.payImage} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </td>

                                <td>
                                    {item.className}

                                </td>
                                <td>{item.total}</td>
                                <td>{item.transactionId}</td>





                            </tr>)
                        }






                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;