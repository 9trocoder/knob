import React from "react";
import { AddIcon } from "../utils/tools";

function HomeCard({
  homeimg,
  name,
  location,
  beds,
  baths,
  features,
  price,
  availability,
  favorite,
}) {
  return (
    <div className="homecnt">
      <div className="hometop">
        <img src={homeimg} alt="" />
        <div className="homefavicon">{favorite}</div>
      </div>
      <div className="homebottom">
        <div className="hbtop">
          <div className="hbtopleft">
            <p>{name}</p>
            <div className="hbtopleftcnt" />
            <p>{location}</p>
          </div>
          <div className="hbtopleft">{AddIcon}</div>
        </div>

        <div className="hbtop2">
            <p>{beds} Bed</p>
            <div className="hbtop2divide"/>
            <p>{baths} Bath</p>
        </div>

        <div className="hbtopfeatures">
        <p className="hbftitle">{features}</p>
        </div>
      </div>
      <div className="homedown">
        <div className="homedownleft">
            <p className="homedownprice"><span>N{price}</span> /month for 12 months</p>
        </div>
        <div className="homedownright">
            <p>{availability}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
 