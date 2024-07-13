import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:tharukee99@gmail.com">
        <p className="text-sm rotate-90 w-28 md:w-36 lg:w-44 tracking-widest text-[#D2B48C]">
          tharukee99@gmail.com
        </p>
      </a>
      <span className="w-1 h-32 bg-textDark inline-block"></span>
    </div>
  );
};

export default RightSide;
