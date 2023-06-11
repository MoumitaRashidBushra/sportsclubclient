import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Hooks/UseAxiosSecure/UseAxiosSecure';
import Swal from 'sweetalert2';
import UseRole from '../../Hooks/UseRole/UseRole';
import { Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const ShowClasses = ({ cp }) => {

    const [isRole] = UseRole();
    const { user } = useContext(AuthContext)
    const { _id, className, instructorName, instructorEmail, availableSeats, price, image } = cp;
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();


    const handleSelect = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...Unauthorised',
                text: 'Please Login First',

            })

            return navigate('/login')
        }

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
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: .95 }} whileTap={{ scale: 1.05 }}
        >
            <div>
                <div className={`card w-full ${availableSeats == 0 ? 'bg-red-700 shadow ' : 'bg-base-100 shadow '}  `}>
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
        </motion.div>

    );
};

export default ShowClasses;