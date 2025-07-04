import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center gap-10 justify-between shadow-lg px-10 md:px-40 h-[10vh]">
      <Link to='/' className="md:text-2xl text-xl font-bold cursor-pointer ">LOGO</Link>
      <div className="flex items-center gap-10">
        <Link to='/' className="text-md font-medium" >Home</Link>
        <Link to='/view' className="text-md font-medium" >View Items</Link>
      </div>
    </nav>
  );
}

export default Navbar;
