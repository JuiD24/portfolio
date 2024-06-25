import Image from "next/image";
import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const projectData = [
    {   
      title : "AlgoVisualizer",
      imageSrc: "/images/AlgoViz.png",
      sourceCodeLink: "https://github.com/JuiD24/AlgoViz",
      demoLink: "https://demo-link.com",
    },
    {
      title : "Find my Gym Buddy",
      imageSrc: "/images/WREC.jpg",
      sourceCodeLink: "https://github.com/JuiD24/Find_my_Gym_Buddy",
      demoLink: "https://demo-link-2.com",
    },
    // Add more projects as needed
    {
        title : "Decor my Home",
      imageSrc: "/images/DecorMyHome.png",
      // No links for this item
      sourceCodeLink: "https://github.com/JuiD24/Decor_my_home"
    },
    {
        title : "Nodejs-ReactJs-chatApp ",
      imageSrc: "/images/ChatApp.png",
      sourceCodeLink : "https://github.com/JuiD24/Nodejs-ReactJs-chatApp",
      demoLink: "https://demo-link-4.com",
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        PRO<span className="text-yellow-400">JECT</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {projectData.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            sourceCodeLink={project.sourceCodeLink}
            demoLink={project.demoLink}
            delay={(index+1)*300}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
