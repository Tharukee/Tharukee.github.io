import { amazonImg, cyberImg, noorShop } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lg:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="---" />
      
      {/* Project One */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/Tharukee"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={amazonImg}
                alt="BNS DairyTrack"
              />
              <div className="absolute w-full h-full bg-[#D2B48C]/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-[#D2B48C] text-sm tracking-wide">
                Inventory Management System
              </p>
              <h3 className="text-2xl font-bold">BNS DairyTrack</h3>
            </div>
            <div className="border border-[#D2B48C] bg-[#0A192F] text-sm md:text-base p-2 md:p-6 rounded-md" style={{ textAlign: 'justify' }}>
              <p>
              Developed an inventory management system tailored for a dairy product distribution agency. This system was designed to streamline 
              various aspects of the agency’s operations, including tracking stock levels, managing orders, recording sales, and coordinating 
              deliveries. By implementing this system, I significantly enhanced the agency&apos;s operational efficiency and accuracy. The solution 
              involved creating an intuitive user interface, integrating real-time data processing, and ensuring seamless communication between 
              different operational units. This led to improved inventory accuracy, reduced manual errors, and a more efficient workflow, 
              ultimately supporting the agency&apos;s goal of providing timely and accurate delivery of dairy products to their customers.
              </p>
            </div>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Java</li>
              <li>MySQL</li>
              <li>Java Swing</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-[#D2B48C] duration-300"
                href="https://github.com/Tharukee"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Two */}
      <div className="flex flex-col xl:flex-row-reverse gap-6 mt-10">
        <a
          className="w-full xl:w-1/2 h-auto relative group"
          href="https://p2elanka.lk/"
          target="_blank"
        >
          <div>
            <Image
              className="w-full h-full object-contain"
              src={cyberImg}
              alt="P2E Lanka"
            />
            <div className="absolute w-full h-full bg-[#0A192F]/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
          <div>
            <p className="font-titleFont text-[#D2B48C] text-sm tracking-wide">
              Website Development
            </p>
            <h3 className="text-2xl font-bold">P2E Lanka</h3>
          </div>
          <div className="border border-[#D2B48C] bg-[#0A192F] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16" style={{ textAlign: 'justify' }}>
            <p>
            Developed and designed a comprehensive website for a waste management business using WordPress and Elementor. This project involved creating 
            a user-friendly and visually appealing interface to showcase the company&apos;s services, facilitate customer inquiries, and provide information on 
            sustainable waste management practices. By leveraging the flexibility of WordPress and the powerful design capabilities of Elementor, I ensured 
            the website was fully responsive, optimized for search engines, and easy for the client to update. The result was a professional online presence 
            that effectively communicated the business’s value proposition and supported its customer engagement and growth strategies.
            </p>
          </div>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>WordPress</li>
            <li>Elementor</li>
            <li>SEO</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              className="hover:text-[#D2B48C] duration-300"
              href="https://p2elanka.lk/"
              target="_blank"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>

      {/* Project Three */}
      <div className="flex flex-col xl:flex-row gap-6 mt-10">
        <a
          className="w-full xl:w-1/2 h-auto relative group"
          href="https://noorshop.netlify.app/"
          target="_blank"
        >
          <div>
            <Image
              className="w-full h-full object-contain"
              src={noorShop}
              alt="DormMaster"
            />
            <div className="absolute w-full h-full bg-[#D2B48C]/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
          <div>
            <p className="font-titleFont text-[#D2B48C] text-sm tracking-wide">
              Assets Management System
            </p>
            <h3 className="text-2xl font-bold">DormMaster</h3>
          </div>
          <div className="border border-[#D2B48C] bg-[#0A192F] text-sm md:text-base p-2 md:p-6 rounded-md" style={{ textAlign: 'justify' }}>
            <p>
            Developed a comprehensive management system for tracking the status of hostel assets, utilizing both a web application and an 
            Android application. This system was designed to monitor and manage various assets within the hostel, including furniture, 
            appliances, and other equipment. The Android application provided on-the-go accessibility, allowing staff to update asset 
            statuses, report issues, and conduct audits in real-time directly from their mobile devices. The web application offered 
            a centralized dashboard for administrators to oversee asset conditions, generate reports, and ensure timely maintenance. 
            By integrating these platforms, I enhanced the efficiency of asset management, reduced downtime, and improved overall 
            accountability and organization within the hostel.
            </p>
          </div>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>ReactJS</li>
            <li>Bootstrap</li>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>MySQL</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              className="hover:text-[#D2B48C] duration-300"
              href="https://github.com/Tharukee"
              target="_blank"
            >
              <TbBrandGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
