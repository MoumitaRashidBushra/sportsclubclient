import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';

const AddAClass = () => {
    const { user, updateUser, loading } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    console.log(user.displayName)

    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>
            <h2 className='text-center text-4xl font-bold pt-10 pb-6'>Add A Brand New Class!!!</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 pt-8  mb-6 px-20 '>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='className' {...register("name", { required: true })} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" {...register("name", { required: true })} className="file-input file-input-bordered  w-full " />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor name</span>
                        </label>
                        <input type="text" placeholder="instructor name" name='name' defaultValue={user?.displayName} readOnly required className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor email</span>
                        </label>
                        <input type="email" placeholder="instructor email" name='email'
                            {...register("email", { required: true })} defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                    </div>



                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available seats</span>
                        </label>
                        <input type="text" placeholder="available seats" name='availableSeats'
                            {...register("availableSeats", { required: true })} className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="price" name='price' {...register("price", { required: true })} className="input input-bordered w-full" />
                    </div>

                </div>

                <div className="form-control mt-10 px-20 mb-24">
                    <input type="submit" value="ADD CLASS" className="btn btn-primary" />
                </div>

            </form>

        </div>
    );
};

export default AddAClass;