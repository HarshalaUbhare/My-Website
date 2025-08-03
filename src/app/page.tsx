"use client";

import { TypeAnimation } from "react-type-animation";
import BasicTabs from "./BasicTabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const contactItems = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "harshalaubhare@gmail.com",
    },
    {
      icon: faPhone,
      label: "Phone number",
      value: "8291099209",
    },
    {
      icon: faMapMarkerAlt,
      label: "Location",
      value: "Mumbai, Maharashtra, India",
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen flex flex-col lg:flex-row border-0 p-6 lg:p-10 gap-8">
        {/* === Left: Profile Panel === */}
        <div className="w-full lg:w-[30%] flex justify-center items-center bg-[rgba(255,255,255,0.06)] bg-opacity-70 rounded-2xl p-4 lg:h-auto h-[700px]">
          <div className="flex flex-col items-center justify-center w-full gap-6 text-center">
            {/* Profile Picture */}
            <img
              src="/profile.jpg"
              alt="Profile picture"
              className="object-cover rounded-full w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 drop-shadow-[0_0_15px_rgba(230,224,251,0.5)] hover:scale-105 transition-transform duration-300"
            />

            {/* Type Animation */}
            <TypeAnimation
              sequence={[
                "I'm Harshala Ubhare a Software Developer",
                1000,
                "I'm Harshala Ubhare a Web Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-xl sm:text-sm md:text-3xl font-serif md:h-20 h-10"
              repeat={Infinity}
            />

            <div className="w-[80%] mx-auto border-t border-[rgba(255,255,255,0.17)]"></div>

            {/* Contact Info */}
            <div className="w-full flex justify-start px-4 sm:px-8">
              <div className="flex flex-col items-start gap-6 w-full">
                {contactItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-start gap-4 text-left"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="hover:scale-110 transition-transform duration-200 bg-[rgba(255,255,255,0.11)] rounded-2xl p-4 w-6 h-6"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold">{item.label}</span>
                      <span className="text-sm text-gray-400">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-4">
              <a
                href="https://www.linkedin.com/in/harshala-ubhare-960733205"
                target="_blank"
              >
                <img
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a href="https://github.com/HarshalaUbhare" target="_blank">
                <img
                  src="/github.svg"
                  alt="GitHub"
                  className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a href="mailto:harshalaubhare@gmail.com" target="_blank">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-xl sm:text-2xl md:text-3xl hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        {/* === Right: Tabs Section === */}
        <div className="w-full lg:w-[70%] h-[600px] md:h-auto flex items-start justify-start text-slate-400 text-lg sm:text-xl font-light px-1 sm:px-4 overflow-y-auto scrollbar-hide bg-[rgba(255,255,255,0.06)] bg-opacity-70 rounded-2xl p-4">
          <BasicTabs />
        </div>
      </div>
    </>
  );
}
