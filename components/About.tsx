import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="---" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p style={{ textAlign: 'justify' }}>
            Hi, I&apos;m Tharukee Kiriella. I am a final-year undergraduate at the University of Ruhuna, 
            Faculty of Technology, pursuing a Bachelor in Information and Communication Technology 
            with a specialization in software engineering. My academic journey has fueled my passion 
            for software development, web development, and UI/UX designing. Additionally, I have a keen 
            interest in IT project management, which has further broadened my understanding of the tech industry.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Beyond my academic and career pursuits, I am deeply passionate about the arts. Theatre productions serve 
            as my creative outlet, allowing me to release work stress and immerse myself in the world of performance. 
            In addition to theatre, I also engage in dancing and music, which add a dynamic balance to my life.
          </p>
          <p style={{ textAlign: 'justify' }}>
            My unique blend of technical skills and artistic interests enhances my approach to challenges, enabling me 
            to tackle problems with creativity and innovation. I am eager to bring this diverse perspective to every project 
            I undertake.
          </p>
          <p className="text-xl font-bold">
            <strong>Skills Acquired:</strong>
          </p>
          <ul className="max-w-[450px] text-lg font-titleFont grid grid-cols-2 gap-4 mt-6">
            {[
              "JavaScript",
              "Python",
              "PHP",
              "Java",
              "HTML/CSS",
              "MySQL",
              "MongoDB",
              "React",
              "Node.js",
              "Figma",
              "Selenium",
              "Jira"
            ].map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 hover:text-[#D2B48C] transition-colors duration-300"
              >
                <span className="text-[#D2B48C]">
                  <AiFillThunderbolt />
                </span>
                <strong>{skill}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-[#D2B48C]/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-[#D2B48C] rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
