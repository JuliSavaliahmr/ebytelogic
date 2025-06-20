'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import { useState } from "react";
import {
  FaTwitter,
  FaPhoneSquareAlt, FaRegClock, FaSearch,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import { IoMdMail, IoMdMenu, IoMdClose, IoLogoGithub } from "react-icons/io";

import Button from "@/src/components/Button";

import LogoPng from '@/src/assets/images/logo.png';

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Blogs", path: "/blogs" },
  { label: "FAQs", path: "/faqs" },
  { label: "Contact Us", path: "/contact-us" },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header>
      <div className="bg-[#243559] py-1.5">
        <div className="max-w-[1400px] mx-auto text-sm px-6 py-2 flex flex-wrap justify-center sm:justify-between items-center gap-2 sm:gap-4">
          <div className="flex flex-wrap gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-1 text-[#CCCCCC] cursor-pointer">
              <IoMdMail className="text-white" /> connect@ebyteLogic.com
            </div>
            <div className="flex items-center gap-1 text-[#CCCCCC] cursor-pointer">
              <FaPhoneSquareAlt className="text-white" /> +91-9876543210
            </div>
            <div className="flex items-center gap-1 text-[#CCCCCC] cursor-pointer">
              <FaRegClock className="text-white" /> Mon - Fri: 10:00 - 18:00
            </div>
          </div>
          <div className="flex gap-2">
            {[FaLinkedinIn, FaTwitter, IoLogoGithub, FaYoutube].map((Icon, i) => (
              <div key={i} className="bg-primary hover:bg-[#205ed1] transition-all duration-200 h-6 w-6 flex items-center justify-center rounded-sm cursor-pointer">
                <Icon className="text-white text-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 py-4 shadow-lg bg-[#FFFFFFCC] relative z-50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <a href="#">
            <Image src={LogoPng} alt="Logo" width={200} height={45} className="w-56 h-15" />
          </a>
          <nav className="hidden md:block relative">
            <ul className="flex flex-wrap items-center gap-3 lg:gap-6">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative cursor-pointer flex flex-col items-start group-item"
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.path}
                      className={`text-sm lg:text-base font-medium flex flex-col items-start border-b-2 transition-all duration-200
    ${pathname === item.path ? 'text-primary border-transparent' : 'text-[#444444] border-transparent'}
    hover:text-primary hover:border-primary`}
                    >
                      {item.label}
                    </Link>

                  </div>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-black text-lg"><FaSearch /></button>
            <Button onClick={() => router.push('/contact-us')} variant="default">It Consultant</Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)} className="text-2xl text-gray-800">
              <IoMdMenu />
            </button>
          </div>
        </div>
      </div>
      <div className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-[1000] p-5 transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-6">
          <Image src={LogoPng} alt="Logo" width={120} height={40} className="w-[120px] h-10" />
          <button onClick={() => setMenuOpen(false)} className="text-2xl text-gray-700">
            <IoMdClose />
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          {["Home", "About Us", "Blogs", "FAQs", "Contact Us"].map((label, idx) => (
            <li
              key={idx}
              className="text-[#444444] text-base font-medium cursor-pointer flex items-center gap-1"
            >
              {label}
              {["Home", "About Us", "Blogs", "FAQs", "Contact Us"].includes(label)}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-4 items-center">
          <button className="text-black text-lg"><FaSearch /></button>
          <Button onClick={() => router.push('/contact-us')} variant="default">It Consultant</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
