import React from "react";
import HomeCard from "./HomeCard";
import { FavouriteIcon } from "../utils/tools";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";

function Homes() {
  const images = ["https://i.ibb.co/Fg3Q84r/img1.png", "https://i.ibb.co/FKhPwSY/img2.png", "https://i.ibb.co/qmM1Q2d/img3.png", "https://i.ibb.co/gJtyZh9/img4.png"];
  const features = ["Apartment", "Estate", "Furnished", "Ensuite"];
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
        features={features}
      />
      <HomeCard
        homeimg={images}
        favorite={FavouriteIcon}
        name="The Space"
        location="Lekki, Lagos"
        beds={4}
        baths={5}
        price={50000}
        availability="Vacant"
        features={features}
      />
      <HomeCard
        homeimg={images}
        favorite={FavouriteIcon}
        name="The Space"
        location="Lekki, Lagos"
        beds={4}
        baths={5}
        price={50000}
        availability="Vacant"
        features={features}
      />
      <HomeCard
        homeimg={images}
        favorite={FavouriteIcon}
        name="The Space"
        location="Lekki, Lagos"
        beds={4}
        baths={5}
        price={50000}
        availability="Vacant"
        features={features}
      />
      <HomeCard
        homeimg={images}
        favorite={FavouriteIcon}
        name="The Space"
        location="Lekki, Lagos"
        beds={4}
        baths={5}
        price={50000}
        availability="Vacant"
        features={features}
      />
      <HomeCard
        homeimg={images}
        favorite={FavouriteIcon}
        name="The Space"
        location="Lekki, Lagos"
        beds={4}
        baths={5}
        price={50000}
        availability="Vacant"
        features={features}
      />
      <HomeCard
        homeimg={images}
        favorite={FavouriteIcon}
        name="The Space"
        location="Lekki, Lagos"
        beds={4}
        baths={5}
        price={50000}
        availability="Vacant"
        features={features}
      />
      <HomeCard
        homeimg={images}
        favorite={FavouriteIcon}
        name="The Space"
        location="Lekki, Lagos"
        beds={4}
        baths={5}
        price={50000}
        availability="Vacant"
        features={features}
      />
      <HomeCard
        homeimg={images}
        favorite={FavouriteIcon}
        name="The Space"
        location="Lekki, Lagos"
        beds={4}
        baths={5}
        price={50000}
        availability="Vacant"
        features={features}
      />
    </div>
  );
}

export default Homes;
