import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import ppicture from "../assets/me.jpg";
import github_logo from "../assets/github.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-30 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2 z-30 pointer-events-auto'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={ppicture} alt='logo' className='w-9 h-9 object-contain rounded-full' />
          <img src={github_logo} onClick={() => window.open("https://github.com/LeDauphinn", "_blank")} alt='logo' className='w-9 h-9 object-contain rounded-full' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            LeDauphinn &nbsp;
            <span className='sm:block hidden'> | Yunus Eren Türkeri</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-6 lg:gap-8 items-center z-30 pointer-events-auto'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={
                nav.isButton || nav.rainbow
                  ? "cursor-pointer"
                  : `${
                      active === nav.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer`
              }
              onClick={() => setActive(nav.title)}
            >
              {nav.isButton ? (
                <a
                  href={nav.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-btn text-[14px]"
                >
                  {nav.title}
                </a>
              ) : nav.rainbow ? (
                <a
                  href={nav.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rainbow-btn text-[14px]"
                >
                  {nav.title}
                </a>
              ) : nav.external ? (
                <a href={nav.href} target="_blank" rel="noopener noreferrer">{nav.title}</a>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center z-30 pointer-events-auto'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer relative z-30'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl shadow-lg`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={
                    nav.isButton || nav.rainbow
                      ? "cursor-pointer"
                      : `font-poppins font-medium cursor-pointer text-[16px] ${
                          active === nav.title ? "text-white" : "text-secondary"
                        }`
                  }
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  {nav.isButton ? (
                    <a
                      href={nav.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-btn text-[13px]"
                    >
                      {nav.title}
                    </a>
                  ) : nav.rainbow ? (
                    <a
                      href={nav.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rainbow-btn text-[13px]"
                    >
                      {nav.title}
                    </a>
                  ) : nav.external ? (
                    <a href={nav.href} target="_blank" rel="noopener noreferrer">{nav.title}</a>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;