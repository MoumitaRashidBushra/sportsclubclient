import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {


    const [error, setError] = useState('');
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        setError('');
        if (data.password != data.confirmpassword) {
            setError('Does not match password');
            return;
        }




        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('')
                updateUser(createdUser, data.name, data.photo)
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })



    }

    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>

            <div className=' mx-auto lg:mx-60 px-8 lg:px-28 py-10 '>
                <form onSubmit={handleSubmit(onSubmit)}  >
                    <div className="card  w-full max-w-sm shadow bg-base-100">
                        <div className="card-body">
                            <h1 className=" text-2xl lg:text-3xl font-bold mb-3 text-center"> Please Register Now!!!</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' {...register("name", { required: true })} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" name='photo' {...register("photo", { required: true })} className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' {...register("email", { required: true })} className="input input-bordered" />

                                {errors.email && (
                                    <span className='text-red-500'>Please fillup email</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' {...register("password", {
                                    required: true,
                                    pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
                                })} className="input input-bordered" />

                                {errors.password && (
                                    <span className='text-red-500'>Please add 9 characters at least one uppercase letter, one lowercase letter, and one number or special character</span>
                                )}

                                {/* <p className='text-red-500'>{error}</p> */}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="confirm password" name='confirmpassword' {...register("confirmpassword", { required: true })} className="input input-bordered" />

                                <p className='text-red-500'>{error}</p>

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Register" className="btn btn-primary" />
                            </div>
                        </div>
                        <div className='text-center mt-2'>
                            <p className='font-bold mb-6'>Don't Have an Account?<button className="btn btn-outline  ms-2"><Link to='/login'>Login</Link></button> </p>

                        </div>

                    </div>

                </form>

            </div>




        </div>
    );
};

export default Register;