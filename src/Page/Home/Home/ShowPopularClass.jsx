import React from 'react';
import { motion } from 'framer-motion';


const ShowPopularClass = ({ cp }) => {
    const { _id, className, instructorName, instructorEmail, availableSeats, price, image } = cp;
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: .95 }} whileTap={{ scale: 1.05 }}
        >
            <div>
                <div className="card w-full bg-base-100 shadow  ">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{className}</h2>

                        <p className='pt-2'><span className='font-semibold'>Instructor Name:</span>{instructorName}</p>
                        <p className='pt-2'><span className='font-semibold'>Available seats:</span>{availableSeats}</p>
                        <p className='pt-2 pb-4'><span className='font-semibold'>Price:</span> ${price}</p>



                    </div>
                </div>
            </div>
        </motion.div>

    );
};

export default ShowPopularClass;