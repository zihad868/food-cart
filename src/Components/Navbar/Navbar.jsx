import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../../assets/chilli.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(true);
  };

  const toggleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <div className="flex justify-evenly lg:mr-40 lg:ml-10 mt-6">
        <div>
          <ul className="space-x-3 uppercase flex mt-2">
            <Link to="#">
              <img className="w-5 h-5" src={logo} alt="Logo" />
            </Link>
            <NavLink to="#">Menu</NavLink>
            <NavLink to="#">Rewards</NavLink>
            <NavLink to="#">Locations</NavLink>
            <NavLink to="#">Gift Cards</NavLink>
            <NavLink to="#">Log In</NavLink>
          </ul>
        </div>

        <div className="flex space-x-3">
          <div
            className="mt-2 text-3xl mr-3 cursor-pointer relative"
            onClick={toggleDrawer}
          >
            <FaCartShopping />
            <p className="bg-red-500 text-white font-bold rounded-lg absolute -top-7 ml-2 px-1">
              0
            </p>
          </div>
          <button className="uppercase font-bold bg-red-500 px-2 py-1 rounded-md text-white">
            order now
          </button>
        </div>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-red-500 shadow-lg z-50 transition-transform transform translate-x-0 mt-4 mr-3">
          <div className="bg-white w-full flex justify-between">
            <div className="mt-4 text-red-500 text-xl flex">
              <FaCartShopping />
              <p className="ml-3"><span>0</span> item</p>
            </div>
            <button
              onClick={toggleDrawerClose}
              className="text-red-500 border border-red-600 p-2 rounded-md mb-5"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
