import React, { useState, useEffect } from "react";
import { BsCloudSunFill, BsCloudMoonFill } from "react-icons/bs";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../assets/webd.png";
import { Link } from "react-router-dom";
import handleScrollToTop from "./ScrollToTopLink";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={` flex-no-wrap fixed top-0 relative z-[99] border-primary/50  bg-my-custom-grey1 text-white shadow-lg ${
          isSticky ? "sticky top-0 w-full" : ""
        }`}
      >
        <nav className="container  flex h-[70px] items-center justify-between py-2 ">
          {/* Logo section */}
          <div className="grid grid-cols-1 md:grid-cols-2 dark:text-white">
            <div className="flex items-center">
              <img src={logo} alt="WebnD Logo" className="h-14 w-18" />
              <span className="text-xl ml-2 font-semibold">WebnD</span>
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10 cursor-pointer">
              <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-my-custom-yellow after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                <Link to="/" onClick={handleScrollToTop}>
                  Home
                </Link>
              </li>
              <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-my-custom-yellow after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                <Link to="/about" onClick={handleScrollToTop}>
                  About
                </Link>
              </li>
              <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-my-custom-yellow after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                <Link to="/events" onClick={handleScrollToTop}>
                  Events
                </Link>
              </li>
              <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-my-custom-yellow after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                <Link to="/team" onClick={handleScrollToTop}>
                  Team
                </Link>
              </li>
              <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-my-custom-yellow after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                <a href="#contact">Contact</a>
              </li>
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                <BsCloudSunFill
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BsCloudMoonFill
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
            </ul>
          </div>

          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {theme === "dark" ? (
              <BsCloudSunFill
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BsCloudMoonFill
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
