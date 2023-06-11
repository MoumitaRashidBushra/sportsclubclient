import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { motion } from 'framer-motion';

const Dashhome = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>
            <div>
                <h2 className='text-center text-4xl font-bold pt-8 pb-10'> Wellcome to {user?.displayName} !!!</h2>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: .95 }} whileTap={{ scale: 1.05 }}
            >
                <div className='container lg:container lg:mx-auto  lg:px-52'>
                    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 pt-8  mb-16 px-20'>

                        <div >
                            <img src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=740&t=st=1686518316~exp=1686518916~hmac=799d0d2aafcd3c80754895643ac3b2e52fd4df53042179c231a60c149cf4db16" alt="" />
                        </div>

                        <div >
                            <img src="https://img.freepik.com/free-photo/badminton-concept-with-shuttlecock-racket_23-2149940874.jpg?w=740&t=st=1686210916~exp=1686211516~hmac=f6cceadefc8885a77865ed3ecd95d463871fee023ded3489249b65a478c65c36" alt="" />
                        </div>

                        <div>
                            <img src="https://img.freepik.com/free-photo/underwater-landscape_23-2150440384.jpg?w=900&t=st=1686518733~exp=1686519333~hmac=81aed3bfe4e5050f0f2054306f51542fbda0ed0b7b6c5c4f4daa3aedf83efbf4" alt="" />
                        </div>



                        <div >
                            <img src="https://img.freepik.com/premium-photo/basketball-lying-wooden-floor-basketball-court-illuminated-by-spotlights-generative-ai_124507-26633.jpg?w=740" alt="" />
                        </div>


                    </div>
                </div>
            </motion.div>


        </div>
    );
};

export default Dashhome;