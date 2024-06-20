import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  imageSrc: string;
  sourceCodeLink?: string;
  demoLink?: string;
  delay: number; // Add delay as a prop
}

const ProjectItem = ({title, imageSrc, sourceCodeLink, demoLink , delay}: Props) => {
  return (
    <div className="flex flex-col items-center">
        <div className="h-[50px] flex items-center justify-center mb-[1rem]">
        <h6 className="mt-[2rem] mb-[1rem] text-[15px] sm:text-[20px] md:text-[25px] text-white text-center">
        {title}
      </h6>
        </div>
     
      <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
        <Image
          src={imageSrc}
          alt="portfolio"
          layout="fill"
          className="object-contain"
        />
        {(sourceCodeLink || demoLink) && (
          <div className="absolute bottom-0 left-0 right-0  p-2 flex justify-center space-x-4 ">
            {sourceCodeLink && (
              <a
                href={sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors">
                  Source Code
                </button>
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors">
                  Demo
                </button>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
