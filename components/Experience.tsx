import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ReactBD from "./works/ReactBD";
// import Amazon from "./works/Amazon";

const Experience = () => {
  const [workReactbd, setWorkReactbd] = useState(true);
  // const [workAmazon, setWorkAmazon] = useState(false);

  const handleReactbd = () => {
    setWorkReactbd(true);
    // setWorkAmazon(false);
  };

  // const handleAmazon = () => {
  //   setWorkReactbd(false);
  //   setWorkAmazon(true);
  // };

  return (
    <section id="experience" className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
      <SectionTitle title="Where I have Worked" titleNo="---" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleReactbd}
            className={`${
              workReactbd
                ? "border-l-[#D2B48C] text-[#D2B48C]"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium whitespace-nowrap`}
          >
            Orel IT
          </li>
          {/* <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-[#D2B48C] text-[#D2B48C]"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Amazon
          </li> */}
        </ul>
        {workReactbd && <ReactBD />}
        {/* {workAmazon && <Amazon />} */}
      </div>
    </section>
  );
};

export default Experience;
