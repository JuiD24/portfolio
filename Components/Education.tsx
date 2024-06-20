import React from "react";

const Education = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="w-[80%] mx-auto">
        {/* Title Section */}
        <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem] mt-[2rem]">
          Education
        </h1>
        <div className="mb-[3rem] flex items-center md:space-x-10">
          <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
        </div>
        
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-start">
          {/* Education Entry 1 */}
          <div>
            <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]">
              Aug 2020 - Dec 2022
            </span>
            <h4 className="mt-[2rem] mb-[1rem] text-[20px] sm:text-[25px] md:text-[34px] text-white">
              CALIFORNIA STATE UNIVERSITY, CHICO
            </h4>
            <h6 className="text-[18px] sm:text-[20px] md:text-[25px] text-white">
              Master of Science in Computer Science
            </h6>
          </div>

          {/* Education Entry 2 */}
          <div>
            <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]">
              Jun 2013 - May 2017
            </span>
            <h4 className="mt-[2rem] mb-[1rem] text-[20px] sm:text-[25px] md:text-[34px] text-white">
              UNIVERSITY OF MUMBAI
            </h4>
            <h6 className="text-[18px] sm:text-[20px] md:text-[25px] text-white">
              Bachelor of Engineering in Electronics Engineering
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
