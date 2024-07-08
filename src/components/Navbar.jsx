import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 mx-auto w-auto max-w-3xl bg-neutral-100 bg-opacity-60 shadow-md rounded-full py-2 sm:py-4 px-4 sm:px-8 flex items-center justify-between z-50">
      <div className="flex items-center mr-4">
        <a href="/path/to/cv.pdf" download className="p-2 bg-neutral-600 text-white rounded-full hover:bg-neutral-700 text-sm">
          Download CV
        </a>
      </div>
      <div className="hidden sm:flex items-center justify-center gap-4 text-sm">
        <a href="#about" className="text-neutral-600 hover:text-black">About me</a>
        <a href="#technologies" className="text-neutral-600 hover:text-black">Technologies</a>
        <a href="#education" className="text-neutral-600 hover:text-black">Education</a>
        <a href="#projects" className="text-neutral-600 hover:text-black">Projects</a>
        <a href="#contact" className="text-neutral-600 hover:text-black">Contact</a>
      </div>
      <div className="flex items-center ml-4 gap-3 text-xl">
        <FaLinkedin className="text-neutral-600 hover:text-neutral-900" />
        <FaGithub className="text-neutral-600 hover:text-neutral-900" />
      </div>
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 mx-auto w-11/12 bg-neutral-100 bg-opacity-90 shadow-md rounded-lg py-4 px-4 flex flex-col items-center space-y-4 z-40 sm:hidden">
          <a href="#about" className="hover:text-blue-500">About me</a>
          <a href="#technologies" className="hover:text-blue-500">Technologies</a>
          <a href="#education" className="hover:text-blue-500">Education</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
