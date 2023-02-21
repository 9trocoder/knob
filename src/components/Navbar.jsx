import React from 'react';
import KnobLogo from "../assets/svg/knoblogo.svg"
import MenuIcon from "../assets/svg/menuicon.svg"
import { HouseIcon } from '../utils/tools';
import "./components.css"
function Navbar() {
  return (
    <div className="navbar__cnt">
        <img src={KnobLogo} alt="" />

        <img className='navbar_menu' src={MenuIcon} alt="" />
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
  )
}

export default Navbar