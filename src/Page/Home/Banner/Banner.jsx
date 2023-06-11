import React from 'react';

const Banner = () => {
    return (
        <div className=" container lg:container  lg:mx-auto px-10 lg:px-20 ">
            <div className="carousel w-full h-[450px]  lg:h-[600px] mb-16 mt-12">

                <div id="slide1" className="carousel-item relative w-full   ">
                    <img src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=740&t=st=1686205348~exp=1686205948~hmac=c22aa97b7b30a4bf2e40019e56fda57509c001a468dd27cc3efef7b4c1a724c5" className="w-full rounded-xl " />
                    <div className="absolute top-0 left-0 h-full text-white w-1/2 lg:w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ] rounded-xl  ">
                        <div className='ml-6 lg:ml-96 space-y-7 lg:space-y-9  mt-4  lg:mt-32 text-center w-full'>
                            <h1 className=' text-lg lg:text-5xl font-bold w-full '> Hard work beats talent when talent doesn't work hard.</h1>
                            <p className='font-semibold'>Sports teaches you character, it teaches you to play by the rules, it teaches you to know what it feels like to win and lose-it teaches you about life.</p>

                        </div>
                    </div>

                    <div className="absolute bottom-0  flex justify-end items-end gap-2 left-5 right-5 mb-12 ">
                        <a href="#slide3" className="btn btn-circle ">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide2" className="carousel-item relative w-full   ">
                    <img src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1752.jpg?w=826&t=st=1686209798~exp=1686210398~hmac=23a0feb4f67163ce01ad0016689cf07aafeb2525666e7b74ef153d610140a4cf" className="w-full rounded-xl " />
                    <div className="absolute top-0 left-0 h-full text-white w-1/2 lg:w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ] rounded-xl  ">
                        <div className='ml-6 lg:ml-96 space-y-7 lg:space-y-9  mt-4  lg:mt-32 text-center w-full'>
                            <h1 className=' text-lg lg:text-5xl font-bold w-full '> Hard work beats talent when talent doesn't work hard.</h1>
                            <p className='font-semibold'>Sports teaches you character, it teaches you to play by the rules, it teaches you to know what it feels like to win and lose-it teaches you about life.</p>


                        </div>
                    </div>

                    <div className="absolute bottom-0  flex justify-end items-end gap-2 left-5 right-5 mb-12 ">
                        <a href="#slide1" className="btn btn-circle ">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide3" className="carousel-item relative w-full   ">
                    <img src="https://img.freepik.com/free-photo/badminton-concept-with-shuttlecock-racket_23-2149940874.jpg?w=740&t=st=1686210916~exp=1686211516~hmac=f6cceadefc8885a77865ed3ecd95d463871fee023ded3489249b65a478c65c36" className="w-full rounded-xl " />
                    <div className="absolute top-0 left-0 h-full text-white w-1/2 lg:w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ] rounded-xl  ">
                        <div className='ml-6 lg:ml-96 space-y-7 lg:space-y-9  mt-4  lg:mt-32 text-center w-full'>
                            <h1 className=' text-lg lg:text-5xl font-bold w-full '> Hard work beats talent when talent doesn't work hard.</h1>
                            <p className='font-semibold'>Sports teaches you character, it teaches you to play by the rules, it teaches you to know what it feels like to win and lose-it teaches you about life.</p>

                        </div>
                    </div>

                    <div className="absolute bottom-0  flex justify-end items-end gap-2 left-5 right-5 mb-12 ">
                        <a href="#slide2" className="btn btn-circle ">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>

                </div>


            </div>
        </div >
    );
};

export default Banner;