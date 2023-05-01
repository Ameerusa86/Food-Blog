import React from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

// import logo from "../assets/logo.png";
import logo from "../assets/ameer-high-resolution-logo-color-on-transparent-background.svg";
import { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlClose } from "react-icons/sl";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  function handleToggle() {
    setShowMenu(!showMenu);
  }

  function handleWindowClick(event) {
    console.log("handleWindowClick called");

    if (showMenu && event.target.closest(".navbar-menu") === null) {
      setShowMenu(false);
    }
  }

  return (
    <>
      <nav className="navbar ">
        <div className="navbar-logo">
          <img src={logo} className="logo2" alt="" />
        </div>
        <div className="links">
          <ul className="nav-links nav-item-top">
            <li className="link active">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="link">
              {" "}
              <Link
                to="foodideas"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Food Ideas
              </Link>
            </li>
            <li className="link">
              {" "}
              <Link
                to="SpecialMeals"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Special Meals
              </Link>
            </li>
            <li className="link">
              {" "}
              <Link
                to="FoodReviews"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Food Reviews
              </Link>
            </li>
            <li className="link">
              {" "}
              <Link
                to="Advertise"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Advertise with us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle mx-5" onClick={handleToggle}>
          {showMenu ? <SlClose /> : <RxHamburgerMenu />}
        </div>
        <div className={`navbar-menu ${showMenu ? "show" : ""}`}>
          <ul className="navbar-nav d-flex">
            <li className="nav-item_link">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item_link">
              <Link
                to="foodideas"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Food Ideas
              </Link>
            </li>
            <li className="nav-item_link">
              <Link
                to="SpecialMeals"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Special Meals
              </Link>
            </li>
            <li className="nav-item_link">
              <Link
                to="FoodReviews"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Food Reviews
              </Link>
            </li>
            <li className="nav-item_link">
              <Link
                to="Advertise"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Advertise with us
              </Link>
            </li>
          </ul>
        </div>
        {showMenu && <div className="overlay" onClick={handleToggle}></div>}
      </nav>
      <div className={`page-content ${showMenu ? "darken" : ""}`}></div>
    </>
  );
};

export default Navbar;
