import React from 'react';

const ClassesPage = () => {
    return (
        <div>
            <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-10 pt-10 '>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10  mb-16 lg:px-20 px-5'>

                    <div>
                        <div className="card w-full bg-base-100 shadow  ">
                            <figure><img src="https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?w=740&t=st=1684504982~exp=1684505582~hmac=a97df4de954cacb5a6e6718f73fb48df045c4d27f0a573af5d16e29fa1579062" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">Moumita Rashid</h2>

                                <p className='pt-2'><span className='font-semibold'>Instructor Name:</span> Moumita</p>
                                <p className='pt-2'><span className='font-semibold'>Available seats:</span> 450</p>
                                <p className='pt-2 pb-4'><span className='font-semibold'>Price:</span> $120</p>

                                <button class="btn btn-info ">Select class</button>



                            </div>
                        </div>
                    </div>

                    {/* <div>
                            <div className="card w-full bg-base-100 shadow  ">
                                <figure><img src="https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?w=740&t=st=1684504982~exp=1684505582~hmac=a97df4de954cacb5a6e6718f73fb48df045c4d27f0a573af5d16e29fa1579062" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">Moumita Rashid</h2>

                                    <p className='pt-2'><span className='font-semibold'>Email:</span> moumita@gmail.com</p>


                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="card w-full bg-base-100 shadow  ">
                                <figure><img src="https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?w=740&t=st=1684504982~exp=1684505582~hmac=a97df4de954cacb5a6e6718f73fb48df045c4d27f0a573af5d16e29fa1579062" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">Moumita Rashid</h2>

                                    <p className='pt-2'><span className='font-semibold'>Email:</span> moumita@gmail.com</p>


                                </div>
                            </div>
                        </div> */}


                </div>
            </div>
        </div>
    );
};

export default ClassesPage;