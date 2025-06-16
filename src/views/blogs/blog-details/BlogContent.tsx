import React from 'react'

import Image from 'next/image'

import { FaCalendarAlt, FaQuoteLeft } from 'react-icons/fa'

import BlogDetailsJpg from "@/src/assets/images/blogs/blogDetails.jpg"
import BlogDiscussionJpg from "@/src/assets/images/blogs/blogDiscussion.jpg"
import OnlineDiscussionJpg from "@/src/assets/images/blogs/onlineDiscussion.jpg"

const BlogContent = () => {
    return (
        <section className="py-16 sm:py-28">
            <div className='max-w-[1170px] mx-auto px-4 sm:px-6'>
                <div>
                    <Image src={BlogDetailsJpg} alt='BlogDetailsJpg' className='w-[850px] mx-auto h-[478px]' />
                    <div className="flex items-center gap-1 mt-6 mb-4">
                        <FaCalendarAlt className="text-primary text-sm" />
                        <span className='text-sm text-[#757b82]'>18 Oct, 2020</span>
                    </div>
                    <div>
                        <h3 className='text-xl mb-[15px]'>The universal acceptance has given a tremendous</h3>
                        <span className='text-[15px] text-[#5d6471]'>The universal acceptance of Consultation has given a tremendous opportunity for merchants to do crossborder transactions instantly and at reduced cost.Consultations are slowly gaining immense recognition and are growing phenomenally with more and more people trading with this digital currency.</span>
                    </div>
                    <div className="my-[15px] bg-[#F5F5F5] text-[#5d6471] py-5 pr-10 pl-20 relative">
                        <p className='italic'><FaQuoteLeft className='absolute left-12 top-4 w-6 h-6' />Consultations are slowly gaining immense recognition and are growing phenomenally with more and more people trading with this digital currency. The universal acceptance of Consultation.</p>
                    </div>
                    <span className='text-[15px] text-[#5d6471]'>The universal acceptance of Consultation has given a tremendous opportunity for merchants to do crossborder transactions instantly and at reduced cost.Consultations are slowly gaining immense recognition and are growing phenomenally with more..</span>
                    <h3 className='text-xl my-[15px]'>With more and more people trading with this digital</h3>
                    <span className='text-[15px] text-[#5d6471]'>The universal acceptance of Consultation has given a tremendous opportunity for merchants to do crossborder transactions instantly and at reduced cost.Consultations are slowly gaining immense recognition and are growing phenomenally with more..</span>
                    <div className="grid grid-cols-2 gap-6 my-6">
                        <Image src={BlogDiscussionJpg} alt='BlogDetailsJpg' className='w-full h-[300px]' />
                        <Image src={OnlineDiscussionJpg} alt='BlogDetailsJpg' className='w-full h-[300px]' />
                    </div>
                    <span className='text-[15px] text-[#5d6471]'>The universal acceptance of Consultation has given a tremendous opportunity for merchants to do crossborder transactions instantly and at reduced cost.Consultations are slowly gaining immense recognition and are growing phenomenally with more..</span>
                </div>
                <div className="posts mt-8">
                    <h3 className='text-[#3D5368] font-medium text-lg border-b border-[#ddd] pb-2'>Related Post</h3>
                    <div className="grid grid-cols-3 gap-4 mt-10">
                        <div className="flex gap-4">
                            <Image src={BlogDetailsJpg} alt='BlogDetailsJpg' className='w-20 h-20 object-cover' />
                            <div>
                                <p className='text-[15px] text-[#5d6471]'>We offer professional Consultant services.</p>
                                <p className='text-sm text-[#7A7788] mt-2'>27 Jan / 2020</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Image src={BlogDiscussionJpg} alt='BlogDetailsJpg' className='w-20 h-20 object-cover' />
                            <div>
                                <p className='text-[15px] text-[#5d6471]'>randerc is an firm and general group.</p>
                                <p className='text-sm text-[#7A7788] mt-2'>20 June / 2019</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Image src={OnlineDiscussionJpg} alt='BlogDetailsJpg' className='w-20 h-20 object-cover' />
                            <div>
                                <p className='text-[15px] text-[#5d6471]'>Man can change business policy all time.</p>
                                <p className='text-sm text-[#7A7788] mt-2'>13 Nov / 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogContent
