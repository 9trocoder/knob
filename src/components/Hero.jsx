import React, { useState } from "react";
import "./components.css";
import heroimg from "../assets/img/heroimg.png";
import {
  SearchIcon,
  SearchWhiteIcon,
  PlusIcon,
  MenuCloseIcon,
} from "../utils/tools";
import SidebarOutlet from "./SidebarOutlet";

function Hero() {
  const [sorttab, setSort] = useState(false);
  const sortbyhead = (
    <div className="sortbyhead">
      <label className="sortbyheadtitle">Sort By</label>
      <div className="sortbyheadclose" onClick={() => setSort(false)}>
        {MenuCloseIcon}
      </div>
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
                <label>Sort By: Just For You</label>
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

      {sorttab && <SidebarOutlet top={sortbyhead} />}
    </>
  );
}

export default Hero;
