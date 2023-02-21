import React, { useState } from "react";
import KnobLogo from "../assets/svg/knoblogo.svg";
import KnobLogoWhite from "../assets/svg/knoblogowhite.svg";
import MenuIcon from "../assets/svg/menuicon.svg";
import MenuIconClose from "../assets/svg/menucloseicon.svg";
import ArrowRightWhite from "../assets/svg/arrowrightwhite.svg";
import { HouseIcon } from "../utils/tools";
import "./components.css";
function Navbar() {
  const [menutoggle, setMenutoggle] = useState(false);
  return (
    <>
      {!menutoggle && <div className="navbar__cnt">
        <img src={KnobLogo} alt="" />

        <img className="navbar_menu" src={MenuIcon} alt="" onClick={() => setMenutoggle(true)} />
        <div className="navbar__right">
          <div className="navbar__item navhost">
            {HouseIcon}
            <label>Host a place</label>
          </div>

          <div className="navbar__item navlog">
            <label>Login</label>
          </div>
          <div className="navbar__item navreg">
            <label>Register</label>
          </div>
        </div>
      </div>}

     {menutoggle && <div className="navbar__mobile">
        <div className="navbar__top">
          <img src={KnobLogoWhite} alt="" />
          <img src={MenuIconClose} alt="" onClick={() => setMenutoggle(false)} />
        </div>
        <div className="navbar__bottom">
          <div className="navbar__bottom-title">
            <p>Menu</p>
          </div>
          <div className="navbar__bottom-items">
            <div className="navbar__bottom-item">
              <label>Host a Place</label>
              <img src={ArrowRightWhite} alt="" />
            </div>
            <div className="navbar__bottom-item">
              <label>Login</label>
              <img src={ArrowRightWhite} alt="" />
            </div>
            <div className="navbar__bottom-item">
              <label>Register</label>
              <img src={ArrowRightWhite} alt="" />
            </div>
          </div>
        </div>
      </div>}
    </>
  );
}

export default Navbar;
