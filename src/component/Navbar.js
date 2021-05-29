import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import Button from "./Button";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // toggle button
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = ()=> {
    setClick(false)
  }

  // media query button change
  // const showButton = () => {
  //   if (window.innerWidth <= 992) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };
  // window.addEventListener("resize", showButton)
 
  // useEffect(()=>{
  //   showButton()
  // },[])

const deviceWidth = window.matchMedia("(max-width:767px)");

window.addEventListener("resize", ()=> {
	console.log(window.innerWidth);
	/*there is checking our device width and mediaQuery value*/
	if(deviceWidth.matches) {
		setButton(false);
	}
	else {
    setButton(true);
	}
})

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              HASHIR
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                {button ? (
                  <Link to="/sign-up" className="btn-link">
                    <button className="btn--outline">SIGN UP</button>
                  </Link>
                ) : (
                  <Link to="/sign-up" className="btn-link">
                    <button className="btn--outline" className="btn--mobile" onClick={closeMobileMenu}>
                      SIGN UP MOB
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
