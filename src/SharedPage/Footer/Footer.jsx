import React from 'react';
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="bg-black">
            <div className=" container lg:container  lg:mx-auto px-10 lg:px-20  ">


                <div className="grid grid-cols-2 lg:grid-cols-4  gap-10 ml-4 justify-between   mx-auto  lg:gap-28 pb-12 text-white ">
                    <div className='col mt-24'>




                        <a className="btn btn-ghost normal-case text-xl font-extrabold text-left">Sports Club</a>
                        <p className=' mt-3 ml-4 w-full'>Sports clubs embody the spirit of teamwork, dedication, and passion. They are the breeding ground for champions and the nurturing ground for dreams..</p>


                    </div>

                    <div className="col lg:ml-10 lg:mt-24 mt-48 ">
                        <p className="font-bold mb-6">Quick access</p>
                        <p className="mt-4">Home</p>
                        <p className="mt-3 mb-3">Instructors</p>
                        <p>Classes</p>

                    </div>

                    <div className="col mt-24   ">
                        <p className="font-bold  mb-6">Company</p>
                        <p className="mt-4">Why Sports Club</p>
                        <p className="mt-3 mb-3">About</p>
                        <p>Contact us</p>
                        <p className="mt-3 mb-3">
                            Dhaka-1200
                        </p>

                    </div>

                    <div className="col mt-24  text-white ">
                        <p className="font-bold  mb-6"> Social Media Links</p>
                        <p className="mt-4">Follow us on</p>
                        <div className='mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 '>
                            <FaGoogle />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedin />
                        </div>


                    </div>





                </div>
                <div className="text-center pb-20 text-white">


                    <h1>© 2023 Sports Club UIDesign.to - All rights reserved.</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;