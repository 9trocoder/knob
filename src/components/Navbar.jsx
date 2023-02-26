import React, { useState } from "react";
import KnobLogo from "../assets/svg/knoblogo.svg";
import KnobLogoWhite from "../assets/svg/knoblogowhite.svg";
import MenuIcon from "../assets/svg/menuicon.svg";
import MenuIconClose from "../assets/svg/menucloseicon.svg";
import ArrowRightWhite from "../assets/svg/arrowrightwhite.svg";
import { EypeOpen, HouseIcon, RemCheck, UnCheckIcon } from "../utils/tools";
import "./components.css";
import InputField from "./InputField";
function Navbar() {
  const [menutoggle, setMenutoggle] = useState(false);
  const [showlogin, setShowlogin] = useState(true);
  return (
    <>
      {!menutoggle && (
        <div className="navbar__cnt">
          <img src={KnobLogo} alt="" />

          <img
            className="navbar_menu"
            src={MenuIcon}
            alt=""
            onClick={() => setMenutoggle(true)}
          />
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
        </div>
      )}

      {menutoggle && (
        <div className="navbar__mobile">
          <div className="navbar__top">
            <img src={KnobLogoWhite} alt="" />
            <img
              src={MenuIconClose}
              alt=""
              onClick={() => setMenutoggle(false)}
            />
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
        </div>
      )}
      {showlogin && (
        <>
          <div className="logincntoverlay">
            <div className="loginwrap">
              <div className="loginbody">
                <p className="loginwelcome">Welcome Back</p>
                <InputField
                  type="email"
                  placeholder="e.g. Johndoe@gmail.com"
                  label="Email Address"
                />
                <InputField
                  type="password"
                  placeholder="********"
                  label="Password"
                  inputIcon={EypeOpen}
                />
                <div className="remforgot">
                  <div className="remforgot-left">
                    <div className="rflcheck">{RemCheck}</div>
                    <label>Remember me</label>
                  </div>
                  <div className="remforgot-right">
                    <label>Forgot Password?</label>
                  </div>
                </div>
                <button className="loginbtn">
                  Log In
                </button>
                <p className="loginor">Or</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
