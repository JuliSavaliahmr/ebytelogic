import React from 'react'
import Image from 'next/image'

import { FaArrowRight } from 'react-icons/fa'

import SubscribeImg from "@/src/assets/images/about/subscribe.png"
import Buttons from '@/src/components/Buttons'

const Subscribe = () => {
    return (
        <section className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0E191E] rounded-2xl overflow-hidden flex gap-6 items-center justify-between">
                <div className="flex-1 pl-16 text-white">
                    <h2 className="text-2xl sm:text-[34px] font-medium mb-4">
                        Subscribe To Our <span className="text-primary">News Letter</span>
                    </h2>
                    <p className="mb-8 text-[15px]">
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page at its layout.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="px-4 rounded-full bg-[#1E2B34] text-white placeholder-gray-400 border border-[#3178fb66] focus:outline-none focus:ring-1 focus:ring-primary w-[300px]"
                        />
                        <Buttons className='!rounded-full gap-3 flex items-center uppercase'>Subscribe Now<FaArrowRight /></Buttons>
                    </form>
                </div>
                <div className="">
                    <Image
                        src={SubscribeImg}
                        alt="Newsletter"
                        className='w-[480px] h-full'
                    />
                </div>
            </div>
        </section>
    )
}

export default Subscribe
