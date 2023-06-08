import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const { error, status } = useRouteError();

    return (
        <div className=' lg:gap-4 lg:container lg:mx-auto px-5 lg:px-20 lg:pt-12'>
            <div className='text-center  '>

                <p>{error.message}</p>
                <img className="w-96 mx-auto mt-5 mb-5 rounded-xl" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1686136382~exp=1686136982~hmac=741a7ddbb82ac7e4d7c9cd664e1cbc3d4933f404d42b8b558c788b6014f8cbbe" alt="" />

                <Link to='/' className='btn btn-error px-3 text-white'>Back to home</Link >

            </div>

        </div>
    );
};

export default ErrorPage;