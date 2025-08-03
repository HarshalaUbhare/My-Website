import {
  faBagShopping,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGithub,
  SiZod,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
const Education = () => {
  const techStack = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "ReactJS", icon: <SiReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Zod", icon: <SiZod /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Postman", icon: <SiPostman /> },
  ];
  return (
    <div className="w-full max-w-5xl mx-auto px-1 sm:px-6 lg:px-8 flex flex-col h-[300px]">
      <div className="border-l-4 border-gray-700 relative space-y-10 pl-6 sm:pl-8">
        {/* Section Header */}
        <div className="relative flex items-center gap-4">
          {/* Left Dot */}
          {/* <div className="absolute sm:left-[-40px] left-[-32px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-fuchsia-600 rounded-full" /> */}
          <FontAwesomeIcon
            icon={faBagShopping}
            className="text-yellow-400 bg-[rgba(255,255,255,0.08)] p-3 rounded-2xl hover:scale-110 transition-transform duration-200 absolute sm:left-[-58px] left-[-49px] top-1/2 transform -translate-y-1/2"
          />
          <span className="font-semibold text-white text-xl">Experience</span>
        </div>

        {/* Entry 1 */}
        <div className="relative">
          {/* Dot */}
          <div className="absolute sm:left-[-40px] left-[-32px] top-1/8 transform -translate-y-1/2 w-3 h-3 bg-fuchsia-600 rounded-full" />
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-white">
              Front-end Developer – Healiom Inc.
            </h3>
            <span className="text-yellow-400 font-semibold text-sm">
              June 2024 – Present{" "}
            </span>
            <p className="text-sm text-gray-400 text-justify">
              Working on the development and maintenance of responsive web
              applications for Healiom, an AI-based specialist care logistics
              platform. Responsibilities include building scalable UI
              components, implementing real-time features, and collaborating
              with cross-functional teams using technologies such as React.js,
              Redux, Tailwind CSS, Zod, Tanstack Query, Axios, and GetStream.
            </p>
          </div>
        </div>

        {/* Entry 2 */}
        <div className="relative">
          {/* Dot */}
          <div className="absolute sm:left-[-40px] left-[-32px] top-1/8 transform -translate-y-1/2 w-3 h-3 bg-fuchsia-600 rounded-full" />
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-white">
              Web Developer Intern – VocSkills
            </h3>
            <span className="text-yellow-400 font-semibold text-sm">
              June – July 2023{" "}
            </span>
            <p className="text-sm text-gray-400 text-justify">
              Developed full-stack web applications including IB News and
              TextUtils. Integrated third-party APIs to enhance functionality,
              with a strong focus on responsive design and performance.
              Proficiently used HTML, CSS, Bootstrap, JavaScript, MongoDB,
              Express.js, React.js, Node.js, RESTful APIs, React Router, and
              Git. Ensured clean code structure and adherence to client
              requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="border-l-4 border-gray-700 relative space-y-10 pl-6 sm:pl-8 mt-20">
        {/* Section Header */}
        <div className="relative flex items-center gap-4">
          {/* Left Dot */}
          <FontAwesomeIcon
            icon={faBuildingColumns}
            className="text-yellow-400 bg-[rgba(255,255,255,0.08)] p-3 rounded-2xl hover:scale-110 transition-transform duration-200 absolute sm:left-[-58px] left-[-49px] top-1/2 transform -translate-y-1/2"
          />
          <span className="font-semibold text-white text-xl">Education</span>
        </div>

        {/* Entry 1 */}
        <div className="relative">
          {/* Dot */}
          <div className="absolute sm:left-[-40px] left-[-32px] top-1/8 transform -translate-y-1/2 w-3 h-3 bg-fuchsia-600 rounded-full" />
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-white">
              K J Somaiya institute of Technology sion mumbai{" "}
            </h3>
            <span className="text-yellow-400 font-semibold text-sm">
              2021 — 2024
            </span>
            <p className="text-sm text-gray-400">
              B.Tech in Computer Engineering with a CGPA of 9.42 <br />
              Completed Honors in Cyber Security with a CGPA of 9.10
            </p>
          </div>
        </div>

        {/* Entry 2 */}
        <div className="relative">
          {/* Dot */}
          <div className="absolute sm:left-[-40px] left-[-32px] top-1/8 transform -translate-y-1/2 w-3 h-3 bg-fuchsia-600 rounded-full" />
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-white">
              Dr. Babasaheb Ambedkar Technological university, Raigad{" "}
            </h3>
            <span className="text-yellow-400 font-semibold text-sm">
              2018 — 2024
            </span>
            <p className="text-sm text-gray-400">
              Diploma in Computer Engineering with CGPA of 9.77
            </p>
          </div>
        </div>

        {/* Entry 3 */}
      </div>

      <div className="mt-20 flex flex-col">
        <h2 className="text-2xl font-semibold text-white mb-6">Tech Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 text-center mb-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-gray-500 hover:text-green-300 transition duration-200"
            >
              <div className="text-4xl mb-1">{tech.icon}</div>
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
