import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-[#D2B48C] font-semibold flex items-center tracking-wide">
         What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        While I am currently seeking internship opportunities in Front-end Development, 
        Software QA Engineering, or IT project management, I welcome inquiries. Whether 
        you have a question or wish to connect, feel free to reach out, and I will endeavor 
        to respond promptly.
      </p>

      <a href="mailto:tharukee99@gmail.com">
        <button className="w-40 h-14 border border-[#D2B48C] mt-6 font-titleFont text-sm text-[#D2B48C] tracking-wider rounded-md hover:bg-[#D2B48C] hover:text-white duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
