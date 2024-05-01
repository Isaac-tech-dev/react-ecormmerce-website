import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from "/logo.svg";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    {
      title: "Jewelry & Accessories",
      path: "/",
    },
    {
      title: "Clothing & Shoes",
      path: "/",
    },
    {
      title: "Home & Living",
      path: "/",
    },
    {
      title: "Wedding & Party",
      path: "/",
    },
    {
      title: "Toys & Entertainment",
      path: "/",
    },
    {
      title: "Art & Collectibles",
      path: "/",
    },
    {
      title: "Craft Supplies & Tools",
      path: "/",
    },
  ];
  return (
    <header
      className={`max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0`}
    >
      {/* NAVBAR */}
      <nav
        className={`flex justify-between items-center container md:py-4 pt-6 pb-3`}
      >
        <FaSearch
          className={`text-Black w-5 h-5 cursor-pointer hidden md:block`}
        />
        <a href="/">
          <img src={Logo} alt="" />
        </a>
        {/* BUTTONS FOR ACCOUNT AND SHOPPING */}
        <div className={`text-lg text-Black sm:flex items-center gap-4 hidden`}>
          <a href="/" className={`flex items-center gap-2`}>
            <FaUser /> Account
          </a>
          <a href="/" className={`flex items-center gap-2`}>
            <FaShoppingBag /> Shopping
          </a>
        </div>

        {/* MOBILE VIEW BOTTON */}
        <div className={`sm:hidden`}>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className={`w-5 h-5 text-Black`} />
            ) : (
              <FaBars className={`w-5 h-5 text-Black`} />
            )}
          </button>
        </div>
      </nav>

      {/* LINE */}
      <hr />

      {/* CATEGORY ITEMS */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-black hidden">
          {navItems.map(({ title, path }) => (
            <li key={title} className=" hover:text-orange-500">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* MOBILE VIEW CATEGORY ITEM */}
      <div>
        <ul
          className={`bg-Black text-white px-4 py-2 rounded ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {navItems.map(({ title, path }) => (
            <li
              key={title}
              className=" hover:text-orange-500 my-3 cursor-pointer"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
