import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-[1000] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition duration-300">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-[90px]">
        
        {/* Exact Logo implementation from image */}
        <Link to="/" className="border border-[#4A3B39] px-3.5 py-1.5 flex flex-col items-center justify-center group transition duration-300 hover:bg-[#4A3B39] hover:text-white" onClick={closeMenu}>
          <span className="font-serif text-[1.4rem] font-semibold text-[#4A3B39] leading-tight group-hover:text-white transition duration-300">
            MADURAI MEENAKSHI
          </span>
          <span className="font-sans text-[0.6rem] font-normal tracking-[0.2em] uppercase text-neutral-500 group-hover:text-white/80 transition duration-300 w-full text-left">
            Textiles
          </span>
        </Link>

        <button className="md:hidden text-maroon-dark p-2" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`
          flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-14 items-center
          absolute md:static top-full left-0 right-0 bg-white md:bg-transparent
          p-8 md:p-0 shadow-[0_4px_10px_rgba(0,0,0,0.05)] md:shadow-none
          transition-all duration-300 origin-top
          ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 md:scale-y-100 md:opacity-100'}
        `}>
          {['Home', 'Catalogue', 'About Us', 'Contact'].map((item) => (
            <NavLink 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
              className={({ isActive }) => `
                inline-block text-[0.75rem] font-medium uppercase tracking-[0.15em] transition duration-200 relative pb-1
                hover:text-[#4A3B39] 
                ${isActive 
                  ? 'text-[#4A3B39] border-b-[1.5px] border-[#4A3B39]' 
                  : 'text-[#4A3B39] border-b-[1.5px] border-transparent hover:border-[#4A3B39]'}
              `} 
              onClick={closeMenu}
            >
              {item}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
