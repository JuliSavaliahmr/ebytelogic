import React from 'react'
import { FaFacebookF, FaGoogle, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'

import LogoPng from '@/src/assets/images/logo.png';
import Image from 'next/image';
import Buttons from '@/src/components/Buttons';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#fdfcfc] py-16 sm:py-28'>
                <div className="max-w-[1170px] mx-auto px-4 sm:px-6 space-y-3">
                    <footer className="text-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-3 md:gap-10">
                            <div className='xl:col-span-5 md:col-span-2 col-span-12'>
                                <div className="flex items-center space-x-2 mb-4">
                                    <a href="#">
                                        <Image src={LogoPng} alt="Logo" width={200} height={45} className='w-56 h-15' />
                                    </a>
                                </div>
                                <p className="text-sm md:text-base text-primaryText leading-relaxed mb-4">
                                    Are you looking for professional advice for your new business. Are you looking for professional advice for your new business. Are you looking for professional advice for your new business.
                                </p>
                                <div className="flex flex-wrap gap-2 sm:gap-0">
                                    <input
                                        type="email"
                                        placeholder="Type Email"
                                        className="max-w-[273px] px-4 py-2 bg-white sm:shadow-lg focus:outline-none text-sm"
                                    />
                                    <Buttons variant='default' className="max-w-[153px] w-full bg-primary text-white px-6 py-2 text-sm sm:text-[15px]">
                                        Subscribe
                                    </Buttons>
                                </div>
                            </div>
                            <div className="xl:col-span-4 md:col-span-1 grid grid-cols-1 sm:grid-cols-2 sm:gap-4 col-span-12">
                                <div>
                                    <h3 className="font-medium text-primaryText text-xl mb-3">Services Link</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight /> Business</li>
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight /> Agency</li>
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight /> Social media</li>
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight /> Branding</li>
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight /> Design</li>
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight /> Data science</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="invisible mb-4">.</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight /> Search engine</li>
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight /> Online support</li>
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight /> Development</li>
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight /> Pay per click</li>
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight /> Event activation</li>
                                        <li className='flex items-center gap-1 text-primaryText text-sm sm:text-[15px] cursor-pointer transition-all duration-300 hover:text-primary'><MdKeyboardArrowRight /> Automation</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='xl:col-span-3 md:col-span-1 col-span-12 space-y-4'>
                                <h3 className="font-medium text-primaryText text-xl mb-3">Information</h3>
                                <p className="mb-2 text-primaryText text-sm sm:text-[15px]"><span className="font-medium text-primary">Location</span> : House– 65/4, Zonson street–3/5, London, UK</p>
                                <p className="mb-2 text-primaryText text-sm sm:text-[15px] py-3"><span className="font-medium text-primary">Tel</span> : +0890–564–5644</p>
                                <p className="mb-4 text-primaryText text-sm sm:text-[15px]"><span className="font-medium text-primary">Email</span> : info@randerc3.com</p>

                                <div className="flex space-x-3">
                                    <Buttons variant='default' className="bg-primary rounded h-8 w-8 !p-0 grid place-items-center"><FaFacebookF /></Buttons>
                                    <Buttons variant='default' className="bg-primary rounded h-8 w-8 !p-0 grid place-items-center"><FaTwitter /></Buttons>
                                    <Buttons variant='default' className="bg-primary rounded h-8 w-8 !p-0 grid place-items-center"><FaGoogle /></Buttons>
                                    <Buttons variant='default' className="bg-primary rounded h-8 w-8 !p-0 grid place-items-center"><FaPinterestP /></Buttons>
                                    <Buttons variant='default' className="bg-primary rounded h-8 w-8 !p-0 grid place-items-center"><FaInstagram /></Buttons>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <div className='bg-[#F5F8FB] py-6'>
                <div className="max-w-[1170px] mx-auto px-4 sm:px-6">
                    <p className='text-sm sm:text-[15px]'>Copyright © 2020 <span className='text-primary'>randerc</span> All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
