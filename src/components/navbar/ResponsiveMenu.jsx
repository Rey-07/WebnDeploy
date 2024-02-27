import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ showMenu }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleContactClick = () => {
    setIsContactVisible(false); // Hide "Contact" immediately
    showMenu(false); // Close the menu
  };
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } h-screen w-[65%] bg-my-custom-grey2 fixed top-0 z-50 transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between text-my-custom-grey4`}
    >
      <div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li className="hover:text-my-custom-yellow">
              <Link to="/" onClick={() => showMenu(false)}>
                Home
              </Link>
            </li>
            <li className="hover:text-my-custom-yellow">
              <Link to="/about" onClick={() => showMenu(false)}>
                About
              </Link>
            </li>
            <li className="hover:text-my-custom-yellow">
              <Link to="/events" onClick={() => showMenu(false)}>
                Events
              </Link>
            </li>
            <li className="hover:text-my-custom-yellow">
              <Link to="/team" onClick={() => showMenu(false)}>
                Team
              </Link>
            </li>
            <li
              className={`${
                showMenu ? "" : "hidden" // Use state-based visibility for "Contact"
              } hover:text-my-custom-yellow`}
            >
              <a href="#contact" onClick={handleContactClick}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>© 2024 All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
