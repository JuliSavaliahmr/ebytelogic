import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdMailOutline } from 'react-icons/md'

import Button from '@/src/components/Button'

const ContactDetails = () => {
    return (
        <section>
            <div className='max-w-[1400px] py-28 mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center'>
                <div className="bg-white shadow-[0px_5px_20px_0px_rgba(0,0,0,0.09)] rounded p-8">
                    <form className="space-y-6">
                        <div>
                            <label className="font-medium">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full mt-1 border border-gray-300 px-4 py-2 rounded placeholder:text-[#999] focus:outline-none focus:ring focus:border-[#3078fb]"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="font-medium">Telephone</label>
                                <input
                                    type="tel"
                                    placeholder="Your Phone"
                                    className="w-full mt-1 border border-gray-300 px-4 py-2 rounded placeholder:text-[#999] focus:outline-none focus:ring focus:border-[#3078fb]"
                                />
                            </div>
                            <div>
                                <label className="font-medium">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full mt-1 border border-gray-300 px-4 py-2 rounded placeholder:text-[#999] focus:outline-none focus:ring focus:border-[#3078fb]"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">Subject</label>
                            <input
                                type="text"
                                placeholder="Your Subject"
                                className="w-full mt-1 border border-gray-300 px-4 py-2 rounded placeholder:text-[#999] focus:outline-none focus:ring focus:border-[#3078fb]"
                            />
                        </div>
                        <div>
                            <label className="font-medium">Message</label>
                            <textarea
                                placeholder="Your Message"
                                rows={6}
                                className="w-full mt-1 border border-gray-300 px-4 py-2 rounded placeholder:text-[#999] focus:outline-none focus:ring focus:border-[#3078fb]"
                            />
                        </div>
                        <Button>
                            SUBMIT MESSAGE
                        </Button>
                    </form>
                </div>
                <div>
                    <div>
                        <h4 className="text-base md:text-lg text-primary font-medium uppercase">Contact Us</h4>
                        <h2 className="text-2xl sm:text-[34px] font-medium leading-tight max-w-lg capitalize text-primaryText mt-3 mb-6"> Let&apos;s Get In Touch</h2>
                        <p className="!text-[#5d6471] text-sm sm:text-[15px] !mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <HiOutlineLocationMarker className='!w-7 !h-7 mt-0.5 text-primary' />
                            <div>
                                <h4 className='text-primaryText font-semibold text-base md:text-lg'>Kuta Office</h4>
                                <span className='text-[#5d6471] text-sm md:text-[15px]'>Jl. Raya Kuta No.70, Kuta - Bali</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <HiOutlineLocationMarker className='!w-7 !h-7 mt-0.5 text-primary' />
                            <div>
                                <h4 className='text-primaryText font-semibold text-base md:text-lg'>Ubud Office</h4>
                                <span className='text-[#5d6471] text-sm md:text-[15px]'>Jl. Raya Kedewatan No.44, Ubud</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <BiPhoneCall className='!w-7 !h-7 mt-0.5 text-primary' />
                            <div>
                                <h4 className='text-primaryText font-semibold text-base md:text-lg'>Calling Support</h4>
                                <span className='text-[#5d6471] text-sm md:text-[15px]'>(+62)81 235 26512</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <MdMailOutline className='!w-7 !h-7 mt-0.5 text-primary' />
                            <div>
                                <h4 className='text-primaryText font-semibold text-base md:text-lg'>Email Information</h4>
                                <span className='text-[#5d6471] text-sm md:text-[15px]'>support@domain.com</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr className="mb-8 mt-14 border-gray-300" />
                        <p className="font-semibold mb-6 text-primaryText">Follow Us On Social Media</p>
                        <div className="flex gap-4 text-white">
                            <Button className='!rounded-full !w-11 !h-11 flex items-center justify-center !p-0'>
                                <FaFacebookF className='!w-5 !h-5' />
                            </Button>
                            <Button className='!rounded-full !w-11 !h-11 flex items-center justify-center !p-0'>
                                <FaTwitter className='!w-5 !h-5' />
                            </Button>
                            <Button className='!rounded-full !w-11 !h-11 flex items-center justify-center !p-0'>
                                <FaInstagram className='!w-5 !h-5' />
                            </Button>
                            <Button className='!rounded-full !w-11 !h-11 flex items-center justify-center !p-0'>
                                <FaLinkedinIn className='!w-5 !h-5' />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0840385383916!2d115.17229817588437!3d-8.71733209130563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2476b444c893d%3A0x3030bfbcaf7cc10!2sJl.%20Raya%20Kuta%2C%20Kuta%2C%20Kec.%20Kuta%2C%20Kabupaten%20Badung%2C%20Bali%2080361%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1718262538976!5m2!1sen!2sin"
                width="100%"
                height="450"
                loading="lazy"
            ></iframe>
        </section>
    )
}

export default ContactDetails
