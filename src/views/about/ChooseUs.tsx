import React from 'react'
import Image from 'next/image'

import { FaArrowRight } from 'react-icons/fa'
import { HiOutlineExclamationTriangle } from 'react-icons/hi2'
import { PiBatteryChargingVerticalLight, PiUserCircleDashed } from 'react-icons/pi'

import Buttons from '@/src/components/Buttons'
import cardConnect from "@/src/assets/images/about/cardConnect.png"

const ChooseUs = () => {
    return (
        <section className="py-16 sm:py-28 bg-[url('/images/chooseUs.png')] bg-no-repeat">
            <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
                <h6 className='text-base md:text-lg text-primary font-medium flex items-center gap-2 mb-4'><PiUserCircleDashed />Why Chose Us</h6>
                <h3 className='text-2xl sm:text-[34px] font-medium text-white leading-tight max-w-lg capitalize mb-10'>Stay ahead with <br /> cutting-edge <span className='text-primary'>Technology</span></h3>
                <div className="flex flex-col gap-6 relative max-w-xl">
                    <Image src={cardConnect} alt='sasasas' className='absolute right-4 top-26' width={50} height={100} />
                    <div className="w-lg border-2 border-[#1A2429] p-5 rounded-2xl">
                        <div className="flex items-center gap-3">
                            <PiBatteryChargingVerticalLight className='text-white w-12 h-12' />
                            <h3 className='text-white text-[22px] font-medium'>CloudConnect IT Services</h3>
                        </div>
                        <p className='text-[#FFFFFFCC] text-[15px] mt-4'>IT Solution is a broad category that encompass the solutions aimed at solving problems or improving</p>
                    </div>
                    <div className="w-lg border-2 border-[#1A2429] p-5 rounded-2xl">
                        <div className="flex items-center gap-3">
                            <HiOutlineExclamationTriangle className='text-white w-10 h-10' />
                            <h3 className='text-white text-[22px] font-medium'>Network Infrastructure Solutions</h3>
                        </div>
                        <p className='text-[#FFFFFFCC] text-[15px] mt-4'>IT Solution is a broad category that encompass the solutions aimed at solving problems or improving</p>
                    </div>
                </div>
                <Buttons className='mt-8 !rounded-full gap-3 flex items-center'>Read More<FaArrowRight /></Buttons>
            </div>
        </section>
    )
}

export default ChooseUs
