"use client"
import { useRouter } from "next/navigation";

import React from "react";

import Button from "@/src/components/Button";

const HeroSection = () => {
  const router = useRouter();
  return (
    <div className='bg-[url("/images/hero.jpg")] bg-cover bg-center py-28 md:h-screen lg:-mt-20'>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="w-full lg:w-3/4 space-y-6">
          <p className="text-base md:text-lg text-primary font-medium">
            Embedded Software. Multimedia Frameworks. IoT & Mobile Integration.
          </p>
          <h1 className="text-2xl md:text-5xl xl:text-[54px] font-semibold text-primaryText leading-tight">
            We Build the
            <span className="text-primary ps-3">Software</span> Behind Smart, Connected  <span className="text-primary ps-3">Products</span>.
          </h1>
          <p className="text-sm md:text-lg text-[#5d6471]">
            From Linux BSPs to real-time streaming apps, we help product teams ship scalable, highperformance embedded systems.
          </p>
          <div className="flex space-x-4 pt-4">
            <a href="#services"><Button variant="default" className="max-w-[158px] w-full h-12">Our Services</Button></a>
            <Button onClick={() => router.push('/contact-us')}
              variant="default"
              className="max-w-[158px] w-full h-12 !bg-white !text-primary hover:!bg-primary hover:!text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection