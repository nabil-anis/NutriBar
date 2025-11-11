import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyles = "block md:inline-block px-3 py-2 rounded-md text-base font-medium transition-colors";
  const activeLinkStyles = "text-white bg-[#8A9A5B]";
  const inactiveLinkStyles = "text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-700";

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "Our Story" },
    { to: "/products", text: "Products" },
    { to: "/builder", text: "Build a Bar" },
  ];

  return (
    <header className="bg-stone-100/80 dark:bg-stone-950/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b border-stone-200 dark:border-stone-800">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-serif font-bold text-[#8A9A5B]">
            NutriBar
          </NavLink>
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : inactiveLinkStyles}`}>
                {link.text}
              </NavLink>
            ))}
            <div className="ml-2 border-l border-stone-300 dark:border-stone-700 pl-4">
               <ThemeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="ml-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-1">
            {navLinks.map(link => (
               <NavLink key={link.to} to={link.to} onClick={() => setIsOpen(false)} className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : inactiveLinkStyles}`}>
                {link.text}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;