import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full px-1 sm:px-6 md:px-10 flex flex-col justify-center items-center">
      <div className="w-full max-w-xl bg-[rgba(255,255,255,0.04)] backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
          Get In Touch!!
        </h1>

        <form
          action="https://formspree.io/f/meozzaga"
          method="POST"
          className="w-full flex flex-col gap-6"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-base sm:text-lg font-medium mb-1 text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="border-b border-gray-400 bg-transparent px-1 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-base sm:text-lg font-medium mb-1 text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="border-b border-gray-400 bg-transparent px-1 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-base sm:text-lg font-medium mb-1 text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="Write your message"
              className="border-b border-gray-400 bg-transparent px-1 py-2 resize-none text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-white bg-[rgba(255,255,255,0.11)] p-3 sm:p-4 rounded-2xl hover:scale-105 transition-transform duration-200"
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-white"
              style={{ height: "20px", width: "20px" }}
            />
            <span className="text-sm sm:text-base font-medium">
              Send Message
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
