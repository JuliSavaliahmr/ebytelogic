import React from 'react'
import { FaPlay } from 'react-icons/fa';

const LeftList = [
    "Professional team",
    "Server secure payments",
    "Live hat support",
];

const RightList = [
    "Goal achievement",
    "Worldwide services company",
    "Marketing expert policy",
];


const Technology = () => {
    return (
        <section className='bg-[url("/images/technology.jpg")] bg-cover bg-top xl:pb-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className='flex justify-center items-center py-20 lg:py-0'>
                    <div className='h-[70px] w-[70px] rounded-full bg-primary border border-primary hover:bg-white transition-all duration-200 group grid place-items-center cursor-pointer'>
                        <FaPlay className='text-white group-hover:text-primary text-2xl' />
                    </div>
                </div>
                <div className='bg-secondary py-6 lg:py-24 px-4 sm:px-6 lg:px-16 space-y-4'>
                    <h2 className="text-2xl sm:text-[34px] font-medium text-white leading-tight">
                        Technology
                        <span className="text-primary ps-3">more experts</span>  that provides security.
                    </h2>
                  <p className="text-sm sm:text-[15px] text-[#dddddd]">
  The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence &quot;Lorem ipsum&quot;. Fortunately, the phrase &apos;Lorem Ipsum&apos; is now recognized by electronic pre-press systems and, when found, an alarm can be raised.
</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <ul className='space-y-3 list-[circle] ps-5'>
                            {LeftList.map((item, index) => (
                                <li key={index} className="text-white text-sm sm:text-[15px]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <ul className='space-y-3 list-[circle] ps-5'>
                            {RightList.map((item, index) => (
                                <li key={index} className="text-white text-sm sm:text-[15px]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technology
