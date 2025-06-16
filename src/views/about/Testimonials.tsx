'use client';

import React from 'react'
import Image from 'next/image'

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { PiUserCircleDashed } from 'react-icons/pi'
import { LuQuote } from "react-icons/lu";
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

import Testimonial from "@/src/assets/images/about/testimonial.png";

const testimonials = [
    {
        name: 'James Anderson',
        title: 'Software Engineer',
        feedback:
            'Working with this company has been a game-changer for my business. Their expertise and innovative approach helped us achieve remarkable results. Working with them was a pleasure.',
        rating: 5,
    },
    {
        name: 'Sophia Patel',
        title: 'Marketing Strategist',
        feedback:
            'Exceptional service! The team understood our needs clearly and delivered a stunning design that boosted our engagement metrics dramatically.',
        rating: 5,
    },
    {
        name: 'Liam O’Connor',
        title: 'Startup Founder',
        feedback:
            'The creative direction and technical precision exceeded our expectations. I would highly recommend this team to anyone looking to scale fast.',
        rating: 4,
    },
    {
        name: 'Ava Nguyen',
        title: 'UX Designer',
        feedback:
            'Their attention to detail and commitment to quality is unmatched. Our product now feels more intuitive and visually appealing.',
        rating: 5,
    },
    {
        name: 'Ethan Roberts',
        title: 'Product Manager',
        feedback:
            'From planning to execution, they maintained clear communication and delivered exceptional results. We saw a measurable increase in customer satisfaction.',
        rating: 4,
    },
    {
        name: 'Isabella Gomez',
        title: 'Creative Director',
        feedback:
            'This collaboration brought our brand vision to life. The designs were fresh, modern, and exactly what we needed to stand out.',
        rating: 5,
    },
];


const Testimonials = () => {
    return (
        <div className='max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-28'>
            <div className="flex flex-col md:flex-row justify-between">
                <div>
                    <h6 className='text-base md:text-lg text-primary font-medium flex items-center gap-2 mb-4'><PiUserCircleDashed />Clients Testimonial</h6>
                    <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight max-w-lg capitalize mb-5 md:mb-10'>Unlock the potential <br /> of design <span className='text-primary'>Technology</span></h3>
                </div>
                <p className='max-w-[400px] text-[15px] text-[#5d6471] mb-5'>Working with this company has been a game-the a changer for my business. Their expertise and innovat approa a helped us achieve</p>
            </div>
            <div className="sm:relative grid place-items-center lg:place-items-start">
                <Image src={Testimonial} alt='testimonial' className='sm:flex hidden'/>
                <div className="max-w-xl mx-auto md:px-4 py-10 sm:absolute lg:top-20 lg:-right-10 xl:-right-30">
                    <div className="!bg-white rounded-2xl p-12 !h-[318px] shadow-lg">
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom',
                            }}
                        >
                            {testimonials.map((item, idx) => (
                                <SwiperSlide key={idx} className=''>
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="text-2xl font-semibold">{item.name}</h3>
                                            <p className="text-base text-[#5d6471] mb-4">{item.title}</p>
                                        </div>
                                        <LuQuote className="text-orange-500 w-8 h-8" />
                                    </div>
                                    <div>
                                        <p className="text-[#5d6471] text-[17px] mb-8">
                                            {item.feedback}
                                        </p>
                                        <div className="flex gap-1 text-yellow-400">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="absolute bottom-0 right-0 flex gap-4 z-10">
                                <button className="swiper-button-prev-custom w-10 h-10 flex justify-center items-center rounded-full border text-gray-500 bg-white hover:bg-gray-100 transition cursor-pointer">
                                    <FaArrowLeft />
                                </button>
                                <button className="swiper-button-next-custom w-10 h-10 flex justify-center items-center rounded-full border text-gray-500 bg-white hover:bg-gray-100 transition cursor-pointer">
                                    <FaArrowRight />
                                </button>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
