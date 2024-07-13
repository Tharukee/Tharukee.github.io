import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Data Annotator
        <span className="text-[#D2B48C] tracking-wide">@ Orel IT</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Mar 2019 - Jan 2020
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark" style={{ textAlign: 'justify' }}>
          <span className="text-[#D2B48C] mt-1">
            <TiArrowForward />
          </span>
          Contributed to an image processing project by performing 
          meticulous data annotation, enhancing attention to detail 
          and deepening expertise in data-driven technologies.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
