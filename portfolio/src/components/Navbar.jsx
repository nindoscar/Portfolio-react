// import { nav } from "framer-motion/client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-dark-100/99 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#">
            Oscar
            <span className="text-purple"> Nindebahi </span>
            <div className="w-4 h-4 bg-purple rounded-full"></div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
