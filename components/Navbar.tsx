import React, { useRef, useState } from "react";
import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube, SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShow(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  }

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="cursor-pointer"
          >
            <Image className="w-24" src={logo} alt="logo" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-[#D2B48C] cursor-pointer duration-300 nav-link"
              href="#home"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-[#D2B48C] cursor-pointer duration-300 nav-link"
              href="#about"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-[#D2B48C]"> </span>
                About
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-[#D2B48C] cursor-pointer duration-300 nav-link"
              href="#education"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className="text-[#D2B48C]"> </span>
                Education
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-[#D2B48C] cursor-pointer duration-300 nav-link"
              href="#experience"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className="text-[#D2B48C]"> </span>
                Experience
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-[#D2B48C] cursor-pointer duration-300 nav-link"
              href="#project"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className="text-[#D2B48C]"> </span>
                Project
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-[#D2B48C] cursor-pointer duration-300 nav-link"
              href="#art"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                <span className="text-[#D2B48C]"> </span>
                Artistic Journey
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-[#D2B48C] cursor-pointer duration-300 nav-link"
              href="#contact"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.6 }}
              >
                <span className="text-[#D2B48C]"> </span>
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/Tharukee Kiriella.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.7 }}
              className="px-4 py-2 rounded-md text-[#D2B48C] text-[13px] border border-[#D2B48C] hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setShow(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-[#D2B48C] cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-[#D2B48C] inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-[#D2B48C] inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-[#D2B48C] inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>

        {/* Mobile Menu */}
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              {/* Close Icon */}
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-[#D2B48C] cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />

              {/* Mobile Menu Links */}
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    className="flex items-center gap-1 font-medium text-[#D2B48C] hover:text-[#D2B48C] cursor-pointer duration-300 nav-link"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-[#D2B48C] hover:text-[#D2B48C] cursor-pointer duration-300 nav-link"
                    href="#about"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                    >
                      <span className="text-[#D2B48C]"> </span>
                      About
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-[#D2B48C] hover:text-[#D2B48C] cursor-pointer duration-300 nav-link"
                    href="#education"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      <span className="text-[#D2B48C]"> </span>
                      Education
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-[#D2B48C] hover:text-[#D2B48C] cursor-pointer duration-300 nav-link"
                    href="#experience"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4 }}
                    >
                      <span className="text-[#D2B48C]"> </span>
                      Experience
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-[#D2B48C] hover:text-[#D2B48C] cursor-pointer duration-300 nav-link"
                    href="#project"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5 }}
                    >
                      <span className="text-[#D2B48C]"> </span>
                      Project
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-[#D2B48C] hover:text-[#D2B48C] cursor-pointer duration-300 nav-link"
                    href="#art"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.6 }}
                    >
                      <span className="text-[#D2B48C]"> </span>
                      Artistic Journey
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-[#D2B48C] hover:text-[#D2B48C] cursor-pointer duration-300 nav-link"
                    href="#contact"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.7 }}
                    >
                      <span className="text-[#D2B48C]"> </span>
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="/assets/Tharukee Kiriella.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.8 }}
                    className="px-4 py-2 rounded-md text-[#D2B48C] text-[13px] border border-[#D2B48C] hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>
                {/* Social Media Links */}
                <div className="flex gap-4 mt-4">
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.9 }}
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D2B48C] text-2xl hover:text-white duration-300"
                  >
                    <TbBrandGithub />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 1.0 }}
                    href="https://www.youtube.com/your-channel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D2B48C] text-2xl hover:text-white duration-300"
                  >
                    <SlSocialYoutube />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 1.1 }}
                    href="https://www.linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D2B48C] text-2xl hover:text-white duration-300"
                  >
                    <SlSocialLinkedin />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 1.2 }}
                    href="https://www.facebook.com/your-facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D2B48C] text-2xl hover:text-white duration-300"
                  >
                    <SlSocialFacebook />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 1.3 }}
                    href="https://www.instagram.com/your-instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D2B48C] text-2xl hover:text-white duration-300"
                  >
                    <SlSocialInstagram />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
