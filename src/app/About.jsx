import React from "react";

const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-6 lg:px-8">
      <p className="text-base sm:text-xl font-light italic leading-relaxed text-justify text-slate-400">
        I am a passionate and detail-oriented frontend developer with experience
        in building intuitive and engaging digital experiences. Currently, I
        work at{" "}
        <a
          href="https://www.healiom.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 underline hover:text-purple-300 transition"
        >
          Healiom
        </a>
        , a dynamic startup, while also freelancing in web design. My focus is
        on creating seamless user experiences and delivering high-quality
        solutions that align with business goals.
        <br />
        <br />I thrive in collaborative environments, continuously learning and
        adapting to new challenges. With a strong foundation in software
        development and design, I am eager to contribute to innovative projects
        that drive impact and growth.
      </p>

      <div className="mt-10 relative border-l-4 border-purple-500 bg-white/5 p-4 rounded-md shadow-[inset_2px_0px_6px_rgba(168,85,247,0.1)]">
        <p className="text-base sm:text-lg text-slate-300 text-justify italic">
          From 🧠 brainstorming on napkins to 🖥️ deploying pixel-perfect
          interfaces, my journey as a frontend developer is driven by ⚙️ logic
          and 🎨 design craft.
        </p>
      </div>
      <div className="mt-10 relative border-l-4 border-purple-500 bg-white/5 p-4 rounded-md shadow-[inset_2px_0px_6px_rgba(168,85,247,0.1)]">
        <p className="text-base sm:text-lg text-slate-300 text-justify italic">
          From 📝 scribbles to 🖥️ responsive UIs, I bridge ⚙️ logic with 🎨
          design to craft seamless user experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
