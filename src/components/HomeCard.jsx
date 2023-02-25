import React from "react";
import { AddIcon, LeftArrowWhiteIcon, RightArrowIcon } from "../utils/tools";

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
        <div className="hometopimage">
          {homeimg.map((image, key) => (
            <img key={key} src={`${image}`} alt="" />
          ))}
        </div>

        <div className="homefavicon">{favorite}</div>

        <div className="homenavarrows">
          <div className="homenavaritems">{LeftArrowWhiteIcon}</div>
          <div className="homenavaritems">{RightArrowIcon}</div>
        </div>
      </div>
      <div className="homebottom">
        <div className="hbtop">
          <div className="hbtopleft">
            <label>{name}</label>
            <div className="hbtopleftcnt" />
            <label>{location}</label>
          </div>
          <div className="hbtopright">{AddIcon}</div>
        </div>

        <div className="hbtop2">
          <p>{beds} Bed</p>
          <div className="hbtop2divide" />
          <p>{baths} Bath</p>
        </div>

        <div className="hbtopfeatures">
          <p className="hbftitle">{features}</p>
        </div>
      </div>
      <div className="homedown">
        <div className="homedownleft">
          <p className="homedownprice">
            <span>N{price}</span> /month for 12 months
          </p>
        </div>
        <div className="homedownright">
          <p>{availability}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
