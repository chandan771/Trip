import React, { useState } from 'react';
// import { BsChatSquareDots } from 'react-icons/bs';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaSnapchat,
  FaBars,
} from 'react-icons/fa';
import './style.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4">
        <li className="">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="flex justify-between">
        <FaFacebook className="mx-4 cursor-pointer" />

        <FaInstagram className="mx-4 cursor-pointer" />

        <FaTwitter className="mx-4 cursor-pointer" />

        <FaSnapchat className="mx-4 cursor-pointer" />
      </div>

      {/* Hamburger Icon */}

      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars className="mr-4 cursor-pointer" size={20} />
      </div>

      {/* 
      Mobile Menu */}

      <div
        onClick={handleNav}
        className={
          nav
            ? 'overflow-y-hidden md:hidden case-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 py-7 px-4 flex flex-col'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>

          <li className="text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>

          <li className="text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>

          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
