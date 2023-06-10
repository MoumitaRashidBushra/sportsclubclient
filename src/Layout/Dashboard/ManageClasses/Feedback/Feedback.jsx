import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import Swal from 'sweetalert2';

const Feedback = () => {
    const feedback = useLoaderData();

    const { _id, className, instructorName } = feedback;
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axiosSecure.patch(`/updatefeedback/${_id}`, data)
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
            <h2 className='text-center text-4xl font-bold pt-8 pb-16'> Send A Feedback To {instructorName} !!</h2>

            <div className='text-center px-20 lg:mx-auto  lg:px-28'>
                <form onSubmit={handleSubmit(onSubmit)}  >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Send A Feedback</span>
                        </label>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Send a feedback" name='feedback' {...register("feedback", { required: true })}  ></textarea>

                    </div>
                    <div className="form-control mt-6 ">
                        <input type="submit" value="Send" className="btn btn-primary" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Feedback;