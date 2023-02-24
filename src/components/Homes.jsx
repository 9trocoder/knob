import React from "react";
import HomeCard from "./HomeCard";
import { FavouriteIcon } from "../utils/tools";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";

function Homes() {
  const images = [img1, img2, img3, img4];
  return (
    <div className="homescnt">
      <HomeCard
        homeimg={images}
        favorite={FavouriteIcon}
        name="The Space"
        location="Lekki, Lagos"
        beds={4}
        baths={5}
        price={50000}
        availability="Vacant"
      />
    </div>
  );
}

export default Homes;
