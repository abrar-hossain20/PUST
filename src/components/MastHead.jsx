import React from "react";
import {
  FaLinkedinIn,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const MastHead = () => {
  return (
    <div className="bg-[#b1040e] text-white py-2 ">
      <div className="max-w-11/12 mx-auto flex items-center justify-between">
        {/* Left: Social Icons */}
        <div className="hidden sm:flex items-center gap-3">
          <span className="">Follow Us:</span>
          <a
            href="#"
            aria-label="LinkedIn"
            className="border border-white rounded-full p-1 hover:bg-white hover:text-[#7B0D1E] transition"
          >
            <FaLinkedinIn size={12} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="border border-white rounded-full p-1 hover:bg-white hover:text-[#7B0D1E] transition"
          >
            <FaFacebook size={12} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="border border-white rounded-full p-1 hover:bg-white hover:text-[#7B0D1E] transition"
          >
            <FaYoutube size={12} />
          </a>
        </div>

        {/* Center: Institute Name */}
        <div className="text-center">
          <p className=" font-serif text-xs md:text-lg">
            Pabna University of Science and Technology
          </p>
        </div>

        {/* Right: Email */}
        <div className="hidden sm:flex items-center gap-2">
          <FaEnvelope size={12} />
          <a
            href="mailto:registraroffice@niter.edu.bd"
            className="hover:underline"
          >
            registraroffice@pust.ac.bd
          </a>
        </div>
      </div>
    </div>
  );
};

export default MastHead;
