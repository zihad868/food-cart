import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../../assets/chilli.png";

const Navbar = () => {
  return (
    <div className="flex justify-evenly lg:mr-40 lg:ml-10 mt-5">
      <div>
        <ul className="space-x-3 uppercase flex mt-2">
          <div>
            <a href="/">
              <img className="w-5 h-5" src={logo} alt="" />
            </a>
          </div>
          <NavLink>Menu</NavLink>
          <NavLink>Rewords</NavLink>
          <NavLink>Locations</NavLink>
          <NavLink>Gift Cards</NavLink>
          <NavLink>Log In</NavLink>
        </ul>
      </div>

      <div className="flex space-x-3">
        <div className="mt-2 text-3xl mr-3">
          <FaCartShopping />
        </div>
        <button className="uppercase font-bold bg-red-500 px-2 py-1 rounded-md text-white">
          order now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
