import React from 'react';
import { motion } from 'framer-motion';

const ShowIntructor = ({ instructors }) => {
    const { name, email, photo } = instructors;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: .95 }} whileTap={{ scale: 1.05 }}
        >
            <div>
                <div className="card w-full bg-base-100 shadow  ">
                    <figure><img src={photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{name}</h2>

                        <p className='pt-2'><span className='font-semibold'>Email:</span> {email}</p>


                    </div>
                </div>
            </div>
        </motion.div>

    );
};

export default ShowIntructor;