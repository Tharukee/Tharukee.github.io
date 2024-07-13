import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-[#D2B48C]"
      >
        Hi, This is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Tharukee Kiriella.
        <span className="text-base lgl:text-lg text-textDark mt-2 lgl:mt-4">
          An aspiring Software Engineer.
        </span>
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
        style={{ textAlign: 'justify' }}
      >
       I am a passionate undergraduate pursuing a Bachelor&apos;s degree in Information and 
       Communication Technology with a specialization in software engineering. Dedicated 
       to enhancing my skills in software development, I focus on creating innovative 
       solutions. My academic journey has equipped me with a solid foundation in programming, 
       software design, and problem-solving. I am enthusiastic about leveraging technology to 
       solve real-world challenges and am committed to contributing to impactful projects. 
       On the other hand, I am also an artist, actively participating in theatre productions 
       and passionate about dancing and music, which adds a unique creative perspective to my 
       technical endeavors.{" "}
        
      </motion.p>
      <a href="https://github.com/Tharukee" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-[#D2B48C] rounded-md text-[#D2B48C] tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my projects
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
