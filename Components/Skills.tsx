import React from "react";
import SkillsItem from "./SkillsItem";
import SkillLanguage from "./SkillLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Experience & <span className="text-yellow-400">SKILLS</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div className="mt-[2rem]">
          <SkillsItem
            company="Sharemoney"
            title="Software Engineer "
            year="2022 - Present"
          />
        </div>
        <div className="text-[18px] text-[#ffffff92]">
          <ul >
            <li>
              ▪ Implemented and maintained the website and mobile app using
              <strong>Spring MVC architecture</strong>.
            </li>
            <li>
              ▪ Designed and integrated multiple APIs for new payers,
              facilitating seamless transactions and expanding the company's
              reach.
            </li>
            <li>
              ▪ Spearheaded the addition of bill payment services into the
              system, resulting in a <strong>30% growth in transactions</strong>
            </li>
            <li>
              ▪ Streamlined user management processes for agency owners,
              reducing support tickets by <strong>20%</strong>.
            </li>
            <li>
              ▪ Solely developed an administrative web interface for managing
              debit terminals and kiosks using <strong>Kotlin</strong>,
              <strong>TypeScript</strong>, <strong>HTML</strong>,
              <strong>Bootstrap</strong>, <strong>Spring Boot</strong>, and the
              <strong>Thymeleaf templating engine</strong>.
            </li>
          </ul>
        </div>
        <div className="mt-[3rem]">
          <SkillsItem
            company="Infosys Limited"
            title="Software Engineer "
            year="2018 - 2021"
          />
        </div>
        <div className="text-[18px] text-[#ffffff92]">
          <ul>
            <li>
              ▪ Involved in Requirement Analysis, Project Planning, Sprint
              planning, System and Database Design, Development, Testing,
              Implementation and Documentation using Agile methodology like
              SCRUM, unit testing and fixing various production issues.
            </li>
            <li>
              ▪ Customized product as per client requirements using Spring,
              Hibernate, Java, J2EE, and SQL programming. Altered, updated, and
              enhanced existing systems and applications after performing
              troubleshooting measures to determine the issue. Analyzed end
              users need to provide service-level software development.
            </li>
            <li>
              ▪ Worked in a team to design and develop a prototype called “Award
              Portal" for internal purposes for Infosys.
            </li>
          </ul>
        </div>
        
        <div style={{paddingTop:'7.5rem'}}>
          <SkillLanguage
            skill1="Java"
            skill2="Kotlin"
            skill3="Next JS"
            skill4="Python"
            skill5="C++"
            level1="w-[92%]"
            level2="w-[91%]"
            level3="w-[80%]"
            level4="w-[90%]"
            level5="w-[80%]"
          />
        </div>
        <div>
          <SkillLanguage
            skill1="SpringBoot"
            skill2="React JS"
            skill3="TypeScript"
            skill4="Django"
            skill5=""
            level1="w-[91%]"
            level2="w-[91%]"
            level3="w-[88%]"
            level4="w-[90%]"
            level5=""
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
