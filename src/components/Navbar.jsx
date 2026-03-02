import React from "react";
import Logo from "../assets/images/pust_logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#b1040e]">
      <div className="container mx-auto flex items-center justify-between px-3 py-2 text-white sm:px-4">
        <img
          src={Logo}
          alt="PUST logo"
          className="h-10 w-auto object-contain"
        />
        {/* <h3 className="font-serif text-xl">Pabna University of Science and Technology</h3> */}
        <button
          aria-label="Open menu"
          className="flex items-center gap-1 text-lg sm:text-xl"
        >
          <GiHamburgerMenu className="" />
          <p className="">Menu</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
