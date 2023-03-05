import React, { useState } from "react";
import "./components.css";
import heroimg from "../assets/img/heroimg.png";
import {
  SearchIcon,
  SearchWhiteIcon,
  PlusIcon,
  MenuCloseIcon,
} from "../utils/tools";
import KnobLogoWhite from "../assets/svg/knoblogowhite.svg";
import MenuIcon from "../assets/svg/menuicon.svg";
import MenuIconClose from "../assets/svg/menucloseicon.svg";
import SidebarOutlet from "./SidebarOutlet";

function Hero() {
  const [sorttab, setSort] = useState(false);
  const [sortselect, setSortselect] = useState("Just For You");

  const sortOptions = [
    { id: 1, title: "Just For You" },
    { id: 2, title: "Newest" },
    { id: 3, title: "Price: Low to High" },
    { id: 4, title: "Price: High to Low" },
  ];
  const sortbyhead = (
    <div className="">
      <div className="sortnavbar__top">
        <img src={KnobLogoWhite} alt="" />
        <img src={MenuIconClose} alt="" onClick={() => setSort(false)} />
      </div>
      <div className="sortbyhead">
        <label className="sortbyheadtitle">Sort By</label>
        <div className="sortbyheadclose" onClick={() => setSort(false)}>
          {MenuCloseIcon}
        </div>
      </div>
    </div>
  );

  const sortbybody = (
    <div className="sortbybody">
      {sortOptions.map((item, index) => (
        <div
          onClick={() => {
            setSortselect(item.title);
            setSort(false);
          }}
          className="sortbyitem"
          key={index}
        >
          <div
            className={
              sortselect.includes(item.title)
                ? "sortbyselected"
                : "sortbynotselected"
            }
          />

          <label>{item.title}</label>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="herocnt">
        <div className="heroleft">
          <div className="heroleftcnt">
            <p className="herotitle">
              Love <br />
              Where You'll <br />
              Live
            </p>
            <div className="herosearch">
              <div className="herodsearch">
                <div className="herosearchicon">{SearchIcon}</div>
                <input
                  type="text"
                  placeholder="Lagos, Nigeria"
                  className="heroinputsearch"
                />
              </div>

              <div className="herosearchbtn">{SearchWhiteIcon}</div>
            </div>
            <div className="herofilter">
              <div className="herofilteritem" onClick={() => setSort(true)}>
                <div className="herofilt"></div>
                <label>Sort By: {sortselect}</label>
                <div className="herofiltadd">{PlusIcon}</div>
              </div>
              <div className="herofilteritem">
                <div className="herofilt herofiltb"></div>
                <label>Filter</label>
                <div className="herofiltadd">{PlusIcon}</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="heroright"
          style={{ backgroundImage: `url(${heroimg})` }}
        ></div>
      </div>

      {sorttab && <SidebarOutlet top={sortbyhead} body={sortbybody} />}
    </>
  );
}

export default Hero;
