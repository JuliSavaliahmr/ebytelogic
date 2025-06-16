import React from 'react'
import Image from 'next/image'

import { PiCheckCircleFill, PiUserCircleDashed } from 'react-icons/pi'
import { FaArrowRight } from 'react-icons/fa'

import AboutGielPng from '@/src/assets/images/about/aboutGirl.png'
import AboutVideo from '@/src/assets/images/about/about-video.png'
import Buttons from '@/src/components/Buttons'

const aboutData = [
    "Cloud Connect IT Services desi", "Cyber Shield Technologies here", "Digital Transfor Solutions our te", "IT Consulting and Support"
];

const aboutCards = [
    {
        count: "220 +",
        title: "Wining Award"
    },
    {
        count: "100k",
        title: "Compete Project"
    },
    {
        count: "330K+",
        title: "Clients Review"
    },
    {
        count: "200+",
        title: "Team Member"
    }
]

const Empower = () => {
    return (
        <section className="py-16 sm:py-28 relative">
            <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className='space-y-4'>
                        <h6 className='text-base md:text-lg text-primary font-medium flex items-center gap-2'><PiUserCircleDashed />About Us</h6>
                        <h3 className='text-2xl sm:text-[34px] font-medium text-primaryText leading-tight capitalize'>Empower your business with IT most the <span className='text-primary'>Solutions</span></h3>
                        <p className='text-[#5d6471] text-sm sm:text-[15px]'>IT Solution is a broad category that encompasses various technological solutions aimed at solving problems or improving efficiency in the field of information technology the best it design in the field</p>
                        <div className='grid grid-cols-1 xl:grid-cols-2 items-center gap-5 pt-4'>
                            <div>
                                <Image src={AboutVideo} alt='AboutVideo' width={300} height={178} />
                            </div>
                            <ul className='space-y-3 lg:space-y-6'>
                                {
                                    aboutData.map((about, index) => (
                                        <li key={index} className='text-[#5d6471] text-sm sm:text-[15px] flex items-center gap-1'><PiCheckCircleFill className='text-black' />{about}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <Buttons className='mt-8 !rounded-full gap-3 flex items-center'>Read More<FaArrowRight /></Buttons>
                    </div>
                    <div>
                        <Image src={AboutGielPng} alt='AboutGielPng' width={500} height={700} className='w-auto h-auto ' />
                    </div>
                </div>
            </div>
            <div className='w-full h-32 bg-[#FFFAF0] mt-8 absolute'></div>
            <div className="max-w-[1170px] mx-auto px-4 mt-8 sm:px-6 lg:px-8 relative z-10">
                <div className='bg-white px-10 shadow-xl rounded-[20px] py-[60px] flex flex-wrap gap-3 justify-center lg:justify-between'>
                    {
                        aboutCards.map((cards, index) => (
                            <div key={index} className='w-[180px] h-[103px] sm:w-[220px] sm:h-[133px] rounded-[20px] bg-primary flex flex-col justify-center items-center shadow-[8px_8px_0px_0px_#a7c0ed]'>
                                <h3 className='text-xl sm:text-3xl lg:text-[40px] text-center text-white'>{cards.count}</h3>
                                <p className='text-base lg:text-lg text-white text-center'>{cards.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Empower
