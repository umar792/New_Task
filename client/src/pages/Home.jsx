import React, { useEffect } from "react";
import Hero from "../Components/layout/Hero";
import Section2 from "../Components/Home/Section2";
import Payment from "../Components/Payments/Payment";
import UI from "../Components/Payments/UI";
import HeroCarousal from "../Components/Carousal/HeroCarousal";
import TrendingCarousal from "../Components/Carousal/TrendingCarousal/TrendingCarousal";
import CategorySection from "../Components/CategorySection/CategorySection";
import TrendEvents from "../Components/Home/TrendEvents";
import SportEvents from "../Components/Home/SportEvents";
import CONCERTS from "../Components/Home/CONCERTS";
import COMEDY from "../Components/Home/COMEDY";
import Carousal01 from "../Components/Carousal/Carousal01";

const Home = () => {
  // useEffect(() => {
  //   // Get the element by its ID
  //   var myElement = document.getElementById("map");

  //   // Hide the element by setting its display property to "none"
  //   if (myElement) {
  //     myElement.style.setProperty("display", "none", "important");
  //   }

  //   // Clean up function (optional)
  //   return () => {
  //     // You can do cleanup here if needed
  //   };
  // }, []);
  return (
    <div className="!bg-color1  !z-50  max-w-[2000px] mx-auto">
      {/* <HeroCarousal /> */}
      <div className="mx-[50px]">
        <Carousal01 />
      </div>
      <CategorySection />
      <TrendEvents />
      <SportEvents />
      <CONCERTS />
      <COMEDY />
      <Section2 />
    </div>
  );
};

export default Home;
