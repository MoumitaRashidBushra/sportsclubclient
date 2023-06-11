import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import useTitle from '../../../Hooks/useTitle';
const imgHosting = import.meta.env.VITE_IMAGE;


const AddAClass = () => {

    useTitle('Add A Class');


    const { user, updateUser, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgHosting}`

    const onSubmit = data => {
        console.log(data);

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(imgHostingUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { className, instructorName, instructorEmail, availableSeats, price } = data;
                    const newItem = { className, instructorName, instructorEmail, availableSeats: parseFloat(availableSeats), price: parseFloat(price), image: imgURL, status: "pending", enrolled: 0 }
                    console.log(newItem)
                    axiosSecure.post('/classes', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                //reset();
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Class Added Successfully',
                                    icon: 'success',
                                    confirmButtonText: 'Cool'

                                })
                            }
                        })
                }
            })
    }
    console.log(user.displayName)

    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>
            <h2 className='text-center text-4xl font-bold pt-10 pb-6'>Add A Brand New Class!!!</h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 pt-8  mb-6 px-20 '>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='className' {...register("className", { required: true })} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" name='image' {...register("image", { required: true })} className="file-input file-input-bordered  w-full " />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor name</span>
                        </label>
                        <input type="text" placeholder="instructor name" name='instructorName' defaultValue={user?.displayName}  {...register("instructorName", { required: true })} readOnly className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor email</span>
                        </label>
                        <input type="email" placeholder="instructor email" name='instructorEmail'
                            {...register("instructorEmail", { required: true })} defaultValue={user?.email} readOnly className="input input-bordered w-full" />
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