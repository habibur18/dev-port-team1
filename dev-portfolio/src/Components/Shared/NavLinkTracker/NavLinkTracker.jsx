import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinkTracker = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      //   className={isActive ? "text-blue-500 font-bold " : "text-black text-2xl"}
      className={`text-black text-2xl ${
        isActive ? "text-blue-500 font-bold" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLinkTracker;
