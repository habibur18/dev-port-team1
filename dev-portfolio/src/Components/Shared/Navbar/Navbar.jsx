import React, { useState } from "react";
import NavLinkTracker from "../NavlinkTracker/NavLinkTracker";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex justify-between p-3 md:px-8 py-5 lg:px-16 bg-[#D6C0E8]">
      <div className="space-x-5 md:space-x-14">
        <NavLinkTracker to="/">Home</NavLinkTracker>
        <NavLinkTracker to="/about-me">About Me</NavLinkTracker>
        <NavLinkTracker to="/projects">Projects</NavLinkTracker>
        <NavLinkTracker to="/services">Services</NavLinkTracker>
      </div>
      <div>
        <NavLinkTracker to="/contact">Contact</NavLinkTracker>
      </div>
    </nav>
  );
};

export default Navbar;
