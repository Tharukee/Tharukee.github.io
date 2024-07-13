import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Uni = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont items-center">
        <span className="flex-1">
          Reading for Bachelor of Information and Communication Technology(Hons) <br/>
          <span className="text-[#D2B48C] tracking-wide text-sm"> {/* Decreased font size here */}
            Faculty of Technology, University of Ruhuna
          </span>
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">2020 - Present</p>
      {/* <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark" style={{ textAlign: 'justify' }}>
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Specializing in Software Engineering
        </li>
      </ul> */}
    </motion.div>
  );
};

export default Uni;
