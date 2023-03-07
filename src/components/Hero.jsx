import React, { useState } from "react";
import "./components.css";
import heroimg from "../assets/img/heroimg.png";
import {
  SearchIcon,
  SearchWhiteIcon,
  PlusIcon,
  MenuCloseIcon,
  ArrowRightWhite,
} from "../utils/tools";
import KnobLogoWhite from "../assets/svg/knoblogowhite.svg";
import MenuIcon from "../assets/svg/menuicon.svg";
import MenuIconClose from "../assets/svg/menucloseicon.svg";
import SidebarOutlet from "./SidebarOutlet";

function Hero() {
  const [sorttab, setSort] = useState(false);
  const [filtertab, setFiltertab] = useState(false);
  const [sortselect, setSortselect] = useState("Just For You");
  const [filterselect, setfilterselect] = useState("");

  const sortOptions = [
    { id: 1, title: "Just For You" },
    { id: 2, title: "Newest" },
    { id: 3, title: "Price: Low to High" },
    { id: 4, title: "Price: High to Low" },
  ];
  const filterOptions = [
    { id: 1, title: "Type" },
    { id: 2, title: "Price Range" },
    { id: 3, title: "Baths" },
    { id: 4, title: "Furnishing" },
    { id: 5, title: "Ensuite" },
    { id: 6, title: "Amenities" },
    { id: 7, title: "Power Supply" },
    { id: 8, title: "Stay Duration" },
    { id: 9, title: "Roommates" },
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

  const filterhead = (
    <div className="">
      <div className="sortnavbar__top">
        <img src={KnobLogoWhite} alt="" />
        <img src={MenuIconClose} alt="" onClick={() => setFiltertab(false)} />
      </div>
      <div className="sortbyhead">
        <label className="sortbyheadtitle">Filter</label>
        <div className="sortbyheadclose" onClick={() => setFiltertab(false)}>
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

  const filterbybody = (
    <div className="filterbybody">
      {filterOptions.map((item, index) => (
        <div
          className="filterbyitem"
          key={index}
          onClick={() => setfilterselect(item.title)}
        >
          <div className="filterbyitemleft">
            {filterselect.includes(item.title) && (
              <div className="sortbyselected" />
            )}
            <label>{item.title}</label>
          </div>
          <div className="filterbyitemright">{ArrowRightWhite}</div>
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
              <div
                className="herofilteritem"
                onClick={() => setFiltertab(true)}
              >
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
      {filtertab && <SidebarOutlet top={filterhead} body={filterbybody} />}
    </>
  );
}

export default Hero;
