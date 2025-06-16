import React from "react";
import { FaCogs, FaChartLine, FaLock, FaHeadset, FaCloud, FaUserTie } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const services = [
  {
    icon: <FaCogs />,
    title: "Product Design",
    description:
      "Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetur. Independent agency, free from the internal demands.",
  },
  {
    icon: <FaChartLine />,
    title: "IT Management",
    description:
      "Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetur. Independent agency, free from the internal demands.",
  },
  {
    icon: <FaLock />,
    title: "Data Security",
    description:
      "Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetur. Independent agency, free from the internal demands.",
  },
  {
    icon: <FaUserTie />,
    title: "IT Consultancy",
    description: "Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetur. Independent agency, free from the internal demands."
  },
  {
    icon: <FaCloud />,
    title: "Cloud Services",
    description: "Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetur. Independent agency, free from the internal demands."
  },
  {
    icon: <FaHeadset />,
    title: "IT Support Helpdesk",
    description: "Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetur. Independent agency, free from the internal demands."
  }
];

const Services = () => {
  return (
    <section className="py-16 sm:py-28 bg-[#f5f8fb]">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 text-center space-y-4">
        <h2 className="text-2xl sm:text-[34px] font-medium text-primaryText leading-tight">
          Professional services
        </h2>
        <p className='text-sm sm:text-[15px] text-[#5d6471] max-w-lg mx-auto mb-4'>
          We help agencies to define their new business objectives and then
          create the road map
        </p>
        <div className="flex flex-wrap justify-center gap-5 pt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden max-w-[360px] bg-white border-[0.5px] border-[#3078fb66] hover:border-[#0c1e35] rounded p-5 sm:p-10 text-left transition"
            >
              <div className="relative z-10 space-y-3">
                <h4 className="text-primary text-4xl group-hover:text-white">{service.icon}</h4>
                <h3 className="text-xl sm:text-[22px] font-medium text-primaryText my-2 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-[#5d6471] text-sm sm:text-[15px] mb-4 group-hover:text-white">
                  {service.description}
                </p>
              </div>
              <button className="w-10 h-10 flex items-center justify-center rounded bg-[#f6f9fc] hover:bg-primary text-primary hover:text-white transition z-10 relative cursor-pointer">
                <GoArrowRight />
              </button>
              <div className="absolute -top-1 inset-0 bg-[#0c1e35] z-0 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;