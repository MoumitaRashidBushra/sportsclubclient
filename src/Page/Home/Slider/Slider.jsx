import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Pagination, Navigation } from "swiper";
const Slider = () => {

    return (
        <div className='flex justify-between items-center flex-col  md:flex-row  container lg:container lg:mx-auto  lg:px-32 lg:pt-8 pb-6 '>

            {/* <Swiper

                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='h-1/2'>
                    <img className='w-full ' src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=740&t=st=1686205348~exp=1686205948~hmac=c22aa97b7b30a4bf2e40019e56fda57509c001a468dd27cc3efef7b4c1a724c5" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1752.jpg?w=826&t=st=1686209798~exp=1686210398~hmac=23a0feb4f67163ce01ad0016689cf07aafeb2525666e7b74ef153d610140a4cf" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src="https://img.freepik.com/free-photo/badminton-concept-with-shuttlecock-racket_23-2149940874.jpg?w=740&t=st=1686210916~exp=1686211516~hmac=f6cceadefc8885a77865ed3ecd95d463871fee023ded3489249b65a478c65c36" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper> */}
            <Carousel>
                <div>
                    {/* <p className='absolute bottom-20 left-0 text-red-800 '>Legend 1</p> */}
                    <img className='relative' src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=740&t=st=1686205348~exp=1686205948~hmac=c22aa97b7b30a4bf2e40019e56fda57509c001a468dd27cc3efef7b4c1a724c5" />

                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1752.jpg?w=826&t=st=1686209798~exp=1686210398~hmac=23a0feb4f67163ce01ad0016689cf07aafeb2525666e7b74ef153d610140a4cf" />
                    <p >Legend 2</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/badminton-concept-with-shuttlecock-racket_23-2149940874.jpg?w=740&t=st=1686210916~exp=1686211516~hmac=f6cceadefc8885a77865ed3ecd95d463871fee023ded3489249b65a478c65c36" />
                    <p >Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;