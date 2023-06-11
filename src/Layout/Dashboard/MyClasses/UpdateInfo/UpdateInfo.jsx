import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateInfo = () => {

    const updateInfo = useLoaderData();

    const { _id } = updateInfo;
    const { user, updateUser, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        axiosSecure.put(`/insupinfo/${_id}`, data)
            .then(data => {
                //refetch()
                if (data.data.modifiedCount > 0) {
                    //reset();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Send Feedback Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                }
            })
    }

    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>

            <h2 className='text-center text-4xl font-bold pt-8 pb-16'> Update Classes Information!!!</h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 pt-8  mb-6 px-20 '>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='className' {...register("className", { required: true })} defaultValue={updateInfo.className} className="input input-bordered w-full" />
                    </div>




                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available seats</span>
                        </label>
                        <input type="text" placeholder="available seats" name='availableSeats'
                            {...register("availableSeats", { required: true })} defaultValue={updateInfo.availableSeats} className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="price" name='price' {...register("price", { required: true })} defaultValue={updateInfo.price} className="input input-bordered w-full" />
                    </div>

                </div>

                <div className="form-control mt-10 px-20 mb-24">
                    <input type="submit" value="UPDATE CLASS INFO" className="btn btn-primary" />
                </div>

            </form>

        </div>
    );
};

export default UpdateInfo;