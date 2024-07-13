import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="https://github.com/noorjsdivs" target="_blank">
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center transition duration-300 ease-in-out transform hover:bg-transparent hover:border-transparent hover:text-textGreen hover:scale-105">
          <TbBrandGithub />
        </span>
      </a>
      <a
        href="https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center transition duration-300 ease-in-out transform hover:bg-transparent hover:border-transparent hover:text-textGreen hover:scale-105">
          <SlSocialYoutube />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center transition duration-300 ease-in-out transform hover:bg-transparent hover:border-transparent hover:text-textGreen hover:scale-105">
          <SlSocialLinkedin />
        </span>
      </a>
      <a href="https://www.facebook.com/Noorlalu143/" target="_blank">
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center transition duration-300 ease-in-out transform hover:bg-transparent hover:border-transparent hover:text-textGreen hover:scale-105">
          <SlSocialFacebook />
        </span>
      </a>
      <a href="https://www.instagram.com/simplenoor143/" target="_blank">
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center transition duration-300 ease-in-out transform hover:bg-transparent hover:border-transparent hover:text-textGreen hover:scale-105">
          <SlSocialInstagram />
        </span>
      </a>
    </div>
  );
};

export default Footer;
