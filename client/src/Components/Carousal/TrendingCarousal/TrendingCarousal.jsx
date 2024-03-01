import React from "react";
import "./TrendingCarousal.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import EventCard from "../../EventCard/EventCard";
import { useSelector } from "react-redux";
import SilderCardEvent from "../../EventCard/SilderCardEvent";
import imagwsport from "../../../assets/sport.png";

const TrendingCarousal = ({ data, title, image }) => {
  const swiperSettings = {
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    navigation: true,
    modules: [Pagination, Navigation],
    breakpoints: {
      1280: {
        slidesPerView: 4,
      },
      1100: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div className="trending_carousal !text-color2">
      <h2 className="sm:text-3xl md:text-[35px] font-bold text-left  !mb-4 text-redColor py-5">
        {title}
      </h2>
      {/* --- craousal  */}
      <div>
        <Swiper {...swiperSettings} className="mySwiper ">
          {data?.map((item, index) => {
            return (
              <SwiperSlide className="bg-color4 w-full" key={index}>
                <SilderCardEvent item={item} index={index} image={image} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingCarousal;
