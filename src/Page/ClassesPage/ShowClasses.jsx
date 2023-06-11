import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Hooks/UseAxiosSecure/UseAxiosSecure';
import Swal from 'sweetalert2';
import UseRole from '../../Hooks/UseRole/UseRole';


const ShowClasses = ({ cp }) => {

    const [isRole] = UseRole();
    const { user } = useContext(AuthContext)
    const { _id, className, instructorName, instructorEmail, availableSeats, price, image } = cp;
    const [axiosSecure] = useAxiosSecure();


    const handleSelect = () => {
        const selectClass = { classId: _id, className, instructorName, instructorEmail, availableSeats: parseFloat(availableSeats), price: parseFloat(price), image, usermail: user.email }
        console.log(selectClass)
        axiosSecure.post('/select', selectClass)
            .then(data => {

                if (data.data.insertedId) {
                    //reset();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                }
            })
    }

    return (
        <div>
            <div className="card w-full bg-base-100 shadow  ">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{className}</h2>

                    <p className='pt-2'><span className='font-semibold'>Instructor Name:</span>{instructorName}</p>
                    <p className='pt-2'><span className='font-semibold'>Available seats:</span>{availableSeats}</p>
                    <p className='pt-2 pb-4'><span className='font-semibold'>Price:</span> ${price}</p>

                    <button
                        disabled={isRole === 'admin' || isRole === 'instructor'}
                        onClick={handleSelect}
                        class="btn btn-info ">Select class</button>



                </div>
            </div>
        </div>
    );
};

export default ShowClasses;