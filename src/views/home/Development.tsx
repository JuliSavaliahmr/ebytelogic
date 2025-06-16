'use client';
import Image from 'next/image';

import React, { useState } from 'react';
import { GoCheckCircleFill } from 'react-icons/go';

import SolarJpg from '@/src/assets/images/home/solar.jpg';
import ConsultancyJpg from '@/src/assets/images/home/consultancy.jpg';
import NetworkJpg from '@/src/assets/images/home/network.jpg';
import ProcurementJpg from '@/src/assets/images/home/procurement.jpg';

const tabContents = [
    {
        tab: "It maintenance",
        image: SolarJpg,
        title: "Enterprise AI and data platform solutions",
        description: "Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical",
        points: [
            "Innovation idea latest business technology",
            "Digital content marketing online clients platform",
            "Safe secure services for your online email account",
            "Advanced consulting strategies"
        ]
    },
    {
        tab: "It Consultancy",
        image: ConsultancyJpg,
        title: "Design and development use latest technology",
        description: "And in general the content of dummy text is nonsensical. used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Dummy text is also used to demonstrate the appearance of different typefaces and layouts",
        points: [
            "Innovation idea latest business technology",
            "Digital content marketing online clients platform",
            "Safe secure services for your online email account",
            "Advanced consulting strategies"
        ]
    },
    {
        tab: "Network support",
        image: NetworkJpg,
        title: "Innovation idea latest business tecnology",
        description: "Used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical",
        points: [
            "Network planning and architecture",
            "On-site and remote troubleshooting",
            "Firewall and router configuration",
            "Secure VPN access setup"
        ]
    },
    {
        tab: "It procurement",
        image: ProcurementJpg,
        title: "Digital content marketing online clients plateform",
        description: "Dummy text is also used. used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensica to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.",
        points: [
            "Vendor evaluation and management",
            "Bulk licensing and asset management",
            "Cost-effective purchasing strategies",
            "Lifecycle support for all acquired tools"
        ]
    }
];


const Development = () => {
    const [activeTab, setActiveTab] = useState(0);
    const activeContent = tabContents[activeTab];

    return (
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 py-16 sm:py-28">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-3">
                {tabContents.map((tab, index) => (
                    <li key={index} className="w-full">
                        <button
                            onClick={() => setActiveTab(index)}
                            className={`w-full rounded px-7 py-5 text-lg xl:text-xl border border-primary cursor-pointer ${activeTab === index ? 'text-white bg-primary' : ''
                                }`}
                        >
                            {tab.tab}
                        </button>
                    </li>
                ))}
            </ul>

            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 pt-8'>
                <div>
                    <Image src={activeContent.image} alt={activeContent.title} height={416} width={555} className="sm:h-[388px] rounded-lg mx-auto" />
                </div>
                <div className='space-y-5'>
                    <h2 className='text-primaryText text-xl sm:text-3xl'>{activeContent.title}</h2>
                    <p className='text-[#5d6471] text-sm sm:text-[15px]'>{activeContent.description}</p>
                    <ul className='space-y-3 text-[#5d6471]'>
                        {activeContent.points.map((point, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm sm:text-[15px]">
                                <GoCheckCircleFill className="text-primary" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Development;
