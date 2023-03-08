import React, { useState } from "react";
import "./components.css";
import heroimg from "../assets/img/heroimg.png";
import {
  SearchIcon,
  SearchWhiteIcon,
  PlusIcon,
  MenuCloseIcon,
  ArrowRightWhite,
  NavArrowLeftWhite,
  UnCheckIcon,
  CheckedIcon,
  ClearCirle,
} from "../utils/tools";
import KnobLogoWhite from "../assets/svg/knoblogowhite.svg";
import MenuIconClose from "../assets/svg/menucloseicon.svg";
import SidebarOutlet from "./SidebarOutlet";
import SidebarChild from "./SidebarChild";

function Hero() {
  const [sorttab, setSort] = useState(false);
  const [filtertab, setFiltertab] = useState(false);
  const [filterchild, setFilterchild] = useState(false);
  const [sortselect, setSortselect] = useState("Just For You");
  const [filterselect, setfilterselect] = useState("");
  const [typeselected, setTypeselected] = useState([]);
  const [furnishedselected, setFurnishedselected] = useState([]);
  const [ensuiteselected, setEnsuiteselected] = useState([]);
  const [amenitiesselected, setAmenitiesselected] = useState([]);
  const [roommatesselected, setRoommatesselected] = useState([]);
  const useToggle = () => {
    const [toggleValue, setToggleValue] = useState(false);

    const toggler = () => {
      setToggleValue(!toggleValue);
    };
    return [toggleValue, toggler];
  };
  const [typetoggle, settoggle] = useToggle();

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
    { id: 4, title: "Furnished" },
    { id: 5, title: "Ensuite" },
    { id: 6, title: "Amenities" },
    { id: 7, title: "Power Supply" },
    { id: 8, title: "Stay Duration" },
    { id: 9, title: "Roommates" },
  ];

  const typelist = [
    { id: 1, title: "Apartment" },
    { id: 2, title: "House" },
    { id: 3, title: "Condominium" },
  ];

  const furnishedlist = [
    { id: 1, title: "Yes" },
    { id: 2, title: "No" },
  ];

  const ensuitelist = [
    { id: 1, title: "Yes" },
    { id: 2, title: "No" },
  ];

  const roommateslist = [
    { id: 1, title: "Yes" },
    { id: 2, title: "No" },
  ]

  const amenitieslist = [
    { id: 1, title: "Air Conditioning" },
    { id: 2, title: "CCTV" },
    { id: 3, title: "Cupboard" },
    { id: 4, title: "Elevator" },
    { id: 5, title: "Electric Fence" },
    { id: 6, title: "Freezer" },
    { id: 7, title: "Garage" },
    { id: 8, title: "Generator" },
    { id: 9, title: "Internet Access" },
    { id: 10, title: "Inverter" },
    { id: 11, title: "Mailbox" },
  ];

  const handleTypeSelect = (id) => {
    if (typeselected.includes(id)) {
      setTypeselected((prevSelected) => prevSelected.filter((s) => s !== id));
    } else {
      setTypeselected((prevSelected) => [...prevSelected, id]);
    }
  };
  const handleFurnishedSelect = (id) => {
    if (furnishedselected.includes(id)) {
      setFurnishedselected((prevSelected) =>
        prevSelected.filter((s) => s !== id)
      );
    } else {
      setFurnishedselected((prevSelected) => [...prevSelected, id]);
    }
  };
  const handleEnsuiteSelect = (id) => {
    if (ensuiteselected.includes(id)) {
      setEnsuiteselected((prevSelected) =>
        prevSelected.filter((s) => s !== id)
      );
    } else {
      setEnsuiteselected((prevSelected) => [...prevSelected, id]);
    }
  };
  const handleAmenitiesSelect = (id) => {
    if (amenitiesselected.includes(id)) {
      setAmenitiesselected((prevSelected) =>
        prevSelected.filter((s) => s !== id)
      );
    } else {
      setAmenitiesselected((prevSelected) => [...prevSelected, id]);
    }
  };

  const handleRoommatesSelect = (id) => {
    if (roommatesselected.includes(id)) {
      setRoommatesselected((prevSelected) =>
        prevSelected.filter((s) => s !== id)
      );
    } else {
      setRoommatesselected((prevSelected) => [...prevSelected, id]);
    }
  };

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

  const filterheadchild = (
    <div className="">
      <div className="sortnavbar__top">
        <img src={KnobLogoWhite} alt="" />
        <img
          src={MenuIconClose}
          alt=""
          onClick={() => {
            setFiltertab(true);
            setFilterchild(false);
          }}
        />
      </div>
      <div className="filterheadnavbar__top">
        <div className="fhntleft">
          <div
            className="fhntleftarrow"
            onClick={() => {
              setFiltertab(true);
              setFilterchild(false);
            }}
          >
            {NavArrowLeftWhite}
          </div>
          <label>Filter: {filterselect}</label>
        </div>
        <div className="fhntright">
          <img
            src={MenuIconClose}
            alt=""
            onClick={() => {
              setFiltertab(true);
              setFilterchild(false);
            }}
          />
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

  const handleClick = () => {
    settoggle(!typetoggle);
    if (typetoggle === true) {
      setTypeselected([]);
    } else if (typetoggle === false) {
      setTypeselected(typelist.map((item) => item.title));
    }
  };

  const handleFurnishedClick = () => {
    settoggle(!typetoggle);
    if (typetoggle === true) {
      setFurnishedselected([]);
    } else if (typetoggle === false) {
      setFurnishedselected(furnishedlist.map((item) => item.title));
    }
  };

  const handleEnsuiteClick = () => {
    settoggle(!typetoggle);
    if (typetoggle === true) {
      setEnsuiteselected([]);
    } else if (typetoggle === false) {
      setEnsuiteselected(ensuitelist.map((item) => item.title));
    }
  };

  const handleAmenitiesClick = () => {
    settoggle(!typetoggle);
    if (typetoggle === true) {
      setAmenitiesselected([]);
    } else if (typetoggle === false) {
      setAmenitiesselected(amenitieslist.map((item) => item.title));
    }
  };

  const handleRoommatesClick = () => {
    settoggle(!typetoggle);
    if (typetoggle === true) {
      setRoommatesselected([]);
    } else if (typetoggle === false) {
      setRoommatesselected(roommateslist.map((item) => item.title));
    }
  };

  const filterchildbody = (
    <>
      {filterselect === "Type" && (
        <>
          <div className="fcbbody">
            <div className="fcbbody__top">
              <div className="fcbbt-left">
                {typetoggle ? (
                  <div onClick={handleClick}>{CheckedIcon}</div>
                ) : (
                  <div onClick={handleClick}>{UnCheckIcon}</div>
                )}
              </div>
              <label>Select All</label>
            </div>
            <div className="fcbbody__bottom">
              {typelist.map((item, index) => (
                <div className="fcbbitem" key={index}>
                  <div
                    className="fcbbitem-left"
                    onClick={() => handleTypeSelect(item.title)}
                  >
                    {typeselected.includes(item.title) ? (
                      <div className="">{CheckedIcon}</div>
                    ) : (
                      <div>{UnCheckIcon}</div>
                    )}
                  </div>
                  <label>{item.title}</label>
                </div>
              ))}
            </div>
          </div>
          {typeselected.length !== 0 && (
            <div
              className="fcbclearfilter"
              onClick={() => {
                setTypeselected([]);
              }}
            >
              <div className="fcbcfleft">{ClearCirle}</div>
              <label>Clear Filter</label>
            </div>
          )}
        </>
      )}
      {filterselect === "Furnished" && (
        <>
          <div className="fcbbody">
            <div className="fcbbody__top">
              <div className="fcbbt-left">
                {typetoggle ? (
                  <div onClick={handleFurnishedClick}>{CheckedIcon}</div>
                ) : (
                  <div onClick={handleFurnishedClick}>{UnCheckIcon}</div>
                )}
              </div>
              <label>Select All</label>
            </div>
            <div className="fcbbody__bottom">
              {furnishedlist.map((item, index) => (
                <div className="fcbbitem" key={index}>
                  <div
                    className="fcbbitem-left"
                    onClick={() => handleFurnishedSelect(item.title)}
                  >
                    {furnishedselected.includes(item.title) ? (
                      <div className="">{CheckedIcon}</div>
                    ) : (
                      <div>{UnCheckIcon}</div>
                    )}
                  </div>
                  <label>{item.title}</label>
                </div>
              ))}
            </div>
          </div>
          {furnishedselected.length !== 0 && (
            <div
              className="fcbclearfilter"
              onClick={() => {
                setFurnishedselected([]);
              }}
            >
              <div className="fcbcfleft">{ClearCirle}</div>
              <label>Clear Filter</label>
            </div>
          )}
        </>
      )}
      {filterselect === "Ensuite" && (
        <>
          <div className="fcbbody">
            <div className="fcbbody__top">
              <div className="fcbbt-left">
                {typetoggle ? (
                  <div onClick={handleEnsuiteClick}>{CheckedIcon}</div>
                ) : (
                  <div onClick={handleEnsuiteClick}>{UnCheckIcon}</div>
                )}
              </div>
              <label>Select All</label>
            </div>
            <div className="fcbbody__bottom">
              {ensuitelist.map((item, index) => (
                <div className="fcbbitem" key={index}>
                  <div
                    className="fcbbitem-left"
                    onClick={() => handleEnsuiteSelect(item.title)}
                  >
                    {ensuiteselected.includes(item.title) ? (
                      <div className="">{CheckedIcon}</div>
                    ) : (
                      <div>{UnCheckIcon}</div>
                    )}
                  </div>
                  <label>{item.title}</label>
                </div>
              ))}
            </div>
          </div>
          {ensuiteselected.length !== 0 && (
            <div
              className="fcbclearfilter"
              onClick={() => {
                setEnsuiteselected([]);
              }}
            >
              <div className="fcbcfleft">{ClearCirle}</div>
              <label>Clear Filter</label>
            </div>
          )}
        </>
      )}
      {filterselect === "Amenities" && (
        <>
          <div className="fcbbody">
            <div className="fcbbody__top">
              <div className="fcbbt-left">
                {typetoggle ? (
                  <div onClick={handleAmenitiesClick}>{CheckedIcon}</div>
                ) : (
                  <div onClick={handleAmenitiesClick}>{UnCheckIcon}</div>
                )}
              </div>
              <label>Select All</label>
            </div>
            <div className="fcbbody__bottom">
              {amenitieslist.map((item, index) => (
                <div className="fcbbitem" key={index}>
                  <div
                    className="fcbbitem-left"
                    onClick={() => handleAmenitiesSelect(item.title)}
                  >
                    {amenitiesselected.includes(item.title) ? (
                      <div className="">{CheckedIcon}</div>
                    ) : (
                      <div>{UnCheckIcon}</div>
                    )}
                  </div>
                  <label>{item.title}</label>
                </div>
              ))}
            </div>
          </div>
          {amenitiesselected.length !== 0 && (
            <div
              className="fcbclearfilter"
              onClick={() => {
                setAmenitiesselected([]);
              }}
            >
              <div className="fcbcfleft">{ClearCirle}</div>
              <label>Clear Filter</label>
            </div>
          )}
        </>
      )}
      {filterselect === "Roommates" && (
        <>
          <div className="fcbbody">
            <div className="fcbbody__top">
              <div className="fcbbt-left">
                {typetoggle ? (
                  <div onClick={handleRoommatesClick}>{CheckedIcon}</div>
                ) : (
                  <div onClick={handleRoommatesClick}>{UnCheckIcon}</div>
                )}
              </div>
              <label>Select All</label>
            </div>
            <div className="fcbbody__bottom">
              {roommateslist.map((item, index) => (
                <div className="fcbbitem" key={index}>
                  <div
                    className="fcbbitem-left"
                    onClick={() => handleRoommatesSelect(item.title)}
                  >
                    {roommatesselected.includes(item.title) ? (
                      <div className="">{CheckedIcon}</div>
                    ) : (
                      <div>{UnCheckIcon}</div>
                    )}
                  </div>
                  <label>{item.title}</label>
                </div>
              ))}
            </div>
          </div>
          {roommatesselected.length !== 0 && (
            <div
              className="fcbclearfilter"
              onClick={() => {
                setRoommatesselected([]);
              }}
            >
              <div className="fcbcfleft">{ClearCirle}</div>
              <label>Clear Filter</label>
            </div>
          )}
        </>
      )}
    </>
  );

  const filterbybody = (
    <div className="filterbybody">
      {filterOptions.map((item, index) => (
        <div
          className="filterbyitem"
          key={index}
          onClick={() => {
            setfilterselect(item.title);
            setFilterchild(true);
          }}
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
      {filterchild && (
        <SidebarChild top={filterheadchild} body={filterchildbody} />
      )}
    </>
  );
}

export default Hero;
