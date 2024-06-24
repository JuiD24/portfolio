import React from "react";
// import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#505151]">
      <div className="w-[80%] mx-auto border-b-[1px] pb-[6rem] border-gray-400 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[3rem] ">
        <div className="flex items-center space-x-5">
          <div className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] flex items-center justify-center">
            {/* <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem]" /> */}
          </div>
          <div>
            <h3 className="text-white">dakhvejui@gmail.com</h3>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <div className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] flex items-center justify-center">
            <Image src="/images/github-icon.svg" alt="GitHub" width={60} height={60} className="object-contain"/>
          </div>
          <div>
            <a className="text-white break-all" href="https://github.com/JuiD24">
              https://github.com/JuiD24
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <div className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] flex items-center justify-center">
            <Image src="/images/linkedin-icon.svg" alt="LinkedIn" width={60} height={60} className="object-contain"/>
          </div>
          <div>
            <a className="text-white break-all" href="https://www.linkedin.com/in/jui-dakhave/">
              https://www.linkedin.com/in/jui-dakhave/
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
