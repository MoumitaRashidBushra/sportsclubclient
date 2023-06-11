import React from 'react';

import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: .95 }} whileTap={{ scale: 1.05 }}
        >
            <div className=" container lg:container  lg:mx-auto px-12 lg:px-32 py-10 mt-28 mb-28">
                <div className="flex flex-col lg:flex-row justify-between  items-center gap-12 lg:gap-32 ">



                    <div>
                        <h1
                            className="text-4xl font-bold">Subscribe for our new arrival !!!. </h1>
                        <div className="form-control text-center mt-6">

                            <label className="input-group">
                                <span>Email</span>
                                <input type="text" placeholder="sportsclub@site.com" className="input input-bordered" />
                            </label>
                        </div>
                        <div >
                            <p class="pt-7 pb-7 text-justify">A sports club is an organization or facility that provides a range of sporting activities, facilities, and services to its members. Sports clubs can focus on a specific sport or offer multiple sports and recreational activities.Joining a sports club can be a rewarding experience for individuals of all ages and skill levels, providing opportunities for physical activity, personal growth, social connections, and overall enjoyment of the sport.</p>

                        </div>



                    </div>

                    <div
                        className=' pt-12 mb-24'>

                        <div>
                            <img className='w-full h-full' src="https://img.freepik.com/premium-photo/basketball-lying-wooden-floor-basketball-court-illuminated-by-spotlights-generative-ai_124507-26633.jpg?w=740" alt="" />
                        </div>



                    </div>


                </div>
            </div>

        </motion.div>

    );
};

export default Contact;