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
          <ul>
            <li>
            ● Developed and maintained high-performance web and mobile applications using <strong>Java and Spring MVC</strong>, implementing SOLID 
            principles, Factory and Singleton Design Patterns, and clean coding practices to ensure extensible and maintainable codebase. 
            </li>
            <li>
              ▪ Architected and implemented <strong>RESTful and SOAP APIs</strong> using OpenAPI specifications, optimizing microservices communication with 
              load balancing and rate limiting via API Gateway.
            </li>
            <li>
            ▪ Led the integration of a bill payment system within a distributed <strong>microservices</strong> architecture, implementing Redis for in-memory 
            caching,
              .
            </li>
            <li>
            ▪ Enhanced user management workflows by implementing role-based access control (RBAC) with JSON Web Tokens (JWT) for secure 
            authentication and LDAP for centralized user management, reducing support tickets by 20%. 
            </li>
            <li>
            ▪ Created modular, responsive UI components using Google Web Toolkit (GWT), AJAX, and asynchronous JavaScript to optimize client
            server communication, improving performance and cross-browser compatibility. 
            </li>
            <li>
            ▪ Integrated Onfido’s identity verification API with OAuth 2.0, implementing a secure, GDPR-compliant document verification system 
            that streamlined KYC (Know Your Customer) processes.
            </li>
            <li>
            ▪ Designed and developed an administrative portal for managing debit terminals and kiosks using Kotlin, TypeScript, and Spring Boot, 
employing Thymeleaf for dynamic HTML rendering and Bootstrap for responsive design, providing administrators with an intuitive control interface. 
            </li>
            <li>
            ▪ Contributed to the development of a dynamic React application, leveraging Redux for state management and Apollo Client for efficient 
            GraphQL API integration, optimizing data loading and reducing latency by 15%. 
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
              ▪ Developed a high-traffic e-commerce platform leveraging React.js, Java, Spring, Hibernate (with Redux for state management) and 
Node.js on the backend, optimizing performance and responsiveness, increasing customer engagement and reducing page load times 
by 25%. 
            </li>
            <li>
              ▪ Implemented real-time communication features using WebSocket with Express.js and Socket.io, enabling bidirectional messaging 
              between users and support teams, improving real-time support capabilities and boosting customer satisfaction by 25%. 
            </li>
            <li>
              ▪ Architected and deployed a serverless microservices architecture using AWS Lambda, API Gateway, and DynamoDB, significantly 
              reducing operational costs by 20% while improving scalability and deployment flexibility. 
            </li>
            <li>
            ▪ Led efforts in database optimization, leveraging MongoDB with Mongoose for efficient data storage and retrieval, incorporating 
            indexing strategies and query optimization to improve performance by 30%. 
            </li>
          </ul>
        </div>

        <div style={{ paddingTop: "7.5rem" }}>
          <SkillLanguage
            skill1="Java"
            skill2="Kotlin"
            skill3="Next JS"
            skill4="Python"
            skill5="C++"
            level1="w-[100%]"
            level2="w-[91%]"
            level3="w-[80%]"
            level4="w-[90%]"
            level5="w-[90%]"
          />
        </div>
        <div>
          <SkillLanguage
            skill1="SpringBoot"
            skill2="React JS"
            skill3="TypeScript"
            skill4="Django"
            skill5=""
            level1="w-[100%]"
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
