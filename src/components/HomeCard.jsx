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
          <label>{beds} Bed</label>
          <div className="hbtop2divide" />
          <label>{baths} Bath</label>
        </div>

        <div className="hbtopfeatures">
          {features?.map((feat, key) => (
            <label key={key} className="hbftitle">
              {feat}
              {key === features.length - 1 ? "" : <div className="featurdot" />}
            </label>
          ))}
        </div>
      </div>
      <div className="homedown">
        <div className="homedownleft">
          <label className="homedownprice">
            <span>N{price.toLocaleString()}</span> /month for 12 months
          </label>
        </div>
        <div className="homedownright">
          <label>{availability}</label>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
