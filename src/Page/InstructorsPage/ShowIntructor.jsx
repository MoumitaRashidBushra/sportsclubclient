import React from 'react';

const ShowIntructor = ({ instructors }) => {
    const { name, email, photo } = instructors;

    return (
        <div>
            <div className="card w-full bg-base-100 shadow  ">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>

                    <p className='pt-2'><span className='font-semibold'>Email:</span> {email}</p>


                </div>
            </div>
        </div>
    );
};

export default ShowIntructor;