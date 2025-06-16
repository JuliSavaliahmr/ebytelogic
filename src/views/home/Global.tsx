import Image from 'next/image';

import React from 'react'
import { FaCalendarAlt, FaCommentDots, FaUser } from 'react-icons/fa';

import CreativeDesignsJpg from '@/src/assets/images/home/creativeDesigns.jpg'
import ConsultancyJpg from '@/src/assets/images/home/consultancy.jpg'
import BussinessJpg from '@/src/assets/images/home/bussiness.jpg'
import SolarJpg from '@/src/assets/images/home/solar.jpg';
import ProcurementJpg from '@/src/assets/images/home/procurement.jpg';
import BenefitsJpg from '@/src/assets/images/home/benefits.jpg';

const globalCards = [
    {
        image: CreativeDesignsJpg,
        title: 'Creative design clients response is better',
        author: 'Admin',
        date: '20 July, 2019',
        comments: 13,
    },
    {
        image: ConsultancyJpg,
        title: 'Web development is a best work in future world',
        author: 'Admin',
        date: '13 May, 2018',
        comments: 16,
    },
    {
        image: BussinessJpg,
        title: 'You can trust me and business with together',
        author: 'Admin',
        date: '24 April, 2019',
        comments: 10,
    },
    {
        image: SolarJpg,
        title: 'business man want to be benifit any way',
        author: 'Admin',
        date: '18 Oct, 2020',
        comments: 17,
    },
    {
        image: ProcurementJpg,
        title: 'Procurement trends for digital era',
        author: 'Admin',
        date: '08 Jan, 2023',
        comments: 5,
    },
    {
        image: BenefitsJpg,
        title: 'Benefits of cloud-first IT strategy',
        author: 'Admin',
        date: '25 Dec, 2022',
        comments: 9,
    }
];


const Global = () => {
    return (
        <section className='bg-[#f5f8fb] py-16 sm:py-28'>
            <div className="max-w-[1170px] mx-auto px-4 sm:px-6 space-y-4">
                <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText text-center leading-tight">
                    Global investment plan news
                </h2>
                <p className='text-sm sm:text-[15px] text-[#5d6471] max-w-md mx-auto text-center mb-4'>
                    Dummy text is also used to demonstrate the appearance of different typefaces and layouts
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-4'>
                    {globalCards.map((card, index) => (
                        <div key={index} className={`bg-white border border-gray-200 shadow-[rgba(0,0,0,0.1)_0px_5px_25px] flex flex-col  ${index % 2 === 1 ? 'flex-col-reverse' : ''}`}>
                            <a href="#">
                                <Image src={card.image} alt={card.title} className="object-cover" />
                            </a>
                            <div className="space-y-4 text-primaryText p-7">
                                <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-sm text-[#757b82]">
                                    {/* <div className="flex items-center gap-1">
                                        <FaUser className="text-primary" />
                                        <span>{card.author}</span>
                                    </div> */}
                                    <div className="flex items-center gap-1">
                                        <FaCalendarAlt className="text-primary" />
                                        <span>{card.date}</span>
                                    </div>
                                    {/* <div className="flex items-center gap-1">
                                        <FaCommentDots className="text-primary" />
                                        <span>{card.comments}</span>
                                    </div> */}
                                </div>
                                <h3 className="text-lg sm:text-[21px] leading-normal cursor-pointer hover:text-primary transition-colors duration-300">
                                    {card.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Global
