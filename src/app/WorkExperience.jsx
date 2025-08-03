import React from "react";

const WorkExperience = () => {
  return (
    <div className="w-[800px] flex flex-col gap-10 pl-6 border-l-4 border-fuchsia-600">
      {/* Healiom - Frontend Developer */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col md:w-[70%] gap-2">
          <h3 className="font-semibold text-gray-500">
            Front-end Developer – Healiom Inc.
          </h3>
          <p className="text-base text-gray-200 leading-relaxed">
            Working on the development and maintenance of responsive web
            applications for Healiom, an AI-based specialist care logistics
            platform. Responsibilities include building scalable UI components,
            implementing real-time features, and collaborating with
            cross-functional teams using technologies such as
            <span className="font-medium text-slate-500">
              {" "}
              React.js, Redux, Tailwind CSS, Zod, Tanstack Query, Axios, and
              GetStream.
            </span>
          </p>
        </div>
        <span className="text-lg text-gray-500 md:w-[30%] md:text-right mt-2 md:mt-0">
          June 2024 – Present
        </span>
      </div>

      {/* VocSkills - Web Developer Intern */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex flex-col md:w-[70%] gap-2">
          <h3 className="font-semibold text-gray-500">
            Web Developer Intern – VocSkills
          </h3>
          <p className="text-base text-gray-200 leading-relaxed">
            Developed full-stack web applications including IB News and
            TextUtils. Integrated third-party APIs to enhance functionality,
            with a strong focus on responsive design and performance.
            Proficiently used
            <span className="font-medium text-slate-500">
              {" "}
              HTML, CSS, Bootstrap, JavaScript, MongoDB, Express.js, React.js,
              Node.js, RESTful APIs, React Router, and Git
            </span>
            . Ensured clean code structure and adherence to client requirements.
          </p>
        </div>
        <span className="text-lg text-gray-500 md:w-[30%] md:text-right mt-2 md:mt-0">
          June – July 2023
        </span>
      </div>
    </div>
  );
};

export default WorkExperience;
