"use client"

import Image from 'next/image'

import React, { useEffect, useState } from 'react'
import { TbCopy } from 'react-icons/tb';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsTrophy } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';

import SelfPng from '@/src/assets/images/home/self.png'
import EarthPng from '@/src/assets/images/home/earth.png'

type CounterProps = {
    end: number;
    duration?: number;
};

const Counter: React.FC<CounterProps> = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const incrementTime = 20;
        const steps = Math.ceil(duration / incrementTime);
        const increment = end / steps;

        const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(counter);
            } else {
                setCount(Math.ceil(start));
            }
        }, incrementTime);

        return () => clearInterval(counter);
    }, [end, duration]);

    return <span>{count}</span>;
};

const stats = [
    { icon: <TbCopy />, value: 510, label: "Total Projects" },
    { icon: <AiOutlineGlobal />, value: 120, label: "Worldwide" },
    { icon: <BsTrophy />, value: 40, label: "Awards Win" },
    { icon: <FaRegUser />, value: 210, label: "Team Member" },
];

const Projects = () => {

    return (
        <section>
            <div className='max-w-[1170px] mx-auto px-4 sm:px-6 overflow-hidden'>
                <div className="pt-36 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                    <div className='relative'>
                        <Image src={SelfPng} alt="SelfPng" width={505} height={404} className='mx-auto relative z-10 lg:h-96 lg:w-96 xl:w-auto xl:h-auto' />
                        <Image src={EarthPng} alt="EarthPng" width={505} height={404} className='mx-auto opacity-25 absolute -top-24 lg:-top-11 xl:-top-24 left-0 md:left-36 lg:left-6 z-0 spin-slow lg:h-96 lg:w-96 xl:w-auto xl:h-auto' />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`bg-[#f5f8fb] text-center py-10 px-6 sm:max-w-60 w-full
                            ${index % 2 === 0 ? 'sm:ms-auto' : 'sm:me-auto'}`}
                            >
                                <div className="text-4xl text-primary mb-3 grid place-items-center">{stat.icon}</div>
                                <h3 className="text-[40px] font-bold text-[#444444]">
                                    <Counter end={stat.value} />
                                </h3>
                                <p className="text-lg text-[#444444] mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
