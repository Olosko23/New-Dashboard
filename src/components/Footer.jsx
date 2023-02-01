import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid place-items-center fixed bottom-0 w-full z-10 h-fit sm:h-12 bg-slate-200">
      <div className="px-5 py-3 flex flex-col sm:flex-row gap-5 ">
        <div className="font-semibold">OLOSKO MARKETS INSIGHT &copy; <span className="text-lg">2023</span></div>
        <div className="px-12 sm:px-0 flex justify-center gap-5 mt-1">
          <div>
            <FaTwitter size={20} />
          </div>
          <div>
            <FaGithub size={20} />
          </div>
          <div>
            <FaLinkedin size={20} />
          </div>
          <div>
            <FaInstagram size={20} />
          </div>
          <div>
            <FaDiscord size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
