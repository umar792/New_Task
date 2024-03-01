import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "./Carousal01.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";

import { ColorExtractor } from "react-color-extractor";
// import { ReactSVG } from "react-svg";

const s1 = "https://media.istockphoto.com/id/1337884168/video/man-looking-at-camera-with-disbelief-opponent-in-argument-conspiracy-theorist.jpg?s=640x640&k=20&c=_9i-b6MQhQLCk8bb5MLqRh5bmiMGqGwbBP17OP_V9LY=";
const s2 = "https://www.shutterstock.com/image-photo/photo-handsome-attractive-guy-young-260nw-1699508764.jpg";
// const s3 = "https://img.freepik.com/free-photo/pointing-choosing-caucasian-young-man-s-monochrome-portrait-orange-wall-beautiful-male-curly-model-casual-style-concept-human-emotions-facial-expression-sales-ad_155003-39618.jpg";
// const s4 = "https://img.freepik.com/premium-photo/handsome-black-man-blue_236854-40338.jpg";


const data = [
    // {
    //     image: s4,
    // },
    {
        image: s2,
    },
    // {
    //     image: s3,
    // },
    {
        image: s1,
    },
];

const Carousal01 = () => {
    const [backgroundColors, setBackgroundColors] = useState([]);

    const handleColors = (colors, index) => {
        if (colors && colors.length > 0) {
            setBackgroundColors((prevColors) => {
                const newColors = [...prevColors];
                newColors[index] = colors;
                return newColors;
            });
        }
    };


    return (
        <div className={`Carousal01 w-full  rounded-[20px] h-[80vh]`}>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000 }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="w-[100%] h-[100%]"
                onSlideChange={(swiper) => {
                    const activeIndex = swiper.realIndex;
                    const paginationBullets = document.querySelectorAll(
                        ".swiper-pagination-bullet"
                    );
                    var parentView = document.querySelectorAll(".Carousal01");

                    paginationBullets?.forEach((bullet, index) => {
                        if (index === activeIndex) {
                            bullet.style.setProperty(
                                "background-color",
                                backgroundColors[index] && backgroundColors[index][0],
                                "important"
                            );
                            if (parentView && parentView[0]) {
                                parentView[0].style.boxShadow = `0px 0px 7px 1px ${backgroundColors[index] && backgroundColors[index][0]
                                    }`;
                            }
                        } else {
                            bullet.style.removeProperty("background-color");
                        }
                    });
                }}
            >
                {data?.map((item, index) => {
                    const activeElement = document.querySelector(
                        ".swiper-pagination-bullet-active"
                    );
                    var parentView = document.querySelectorAll(".Carousal01");
                    if (parentView && parentView[0]) {
                        parentView[0].style.boxShadow = `0px 0px 7px 1px ${backgroundColors[0] && backgroundColors[0][0]
                            }`;
                    }

                    if (activeElement) {
                        activeElement.style.setProperty(
                            "background-color",
                            backgroundColors[0] && backgroundColors[0][0],
                            "important"
                        );
                    }
                    return (
                        <SwiperSlide
                            className="carousalbox"
                            key={index}
                            onMouseEnter={() => {
                                var parentView = document.querySelectorAll(".Carousal01");
                                if (parentView && parentView[0]) {
                                    parentView[0].style.boxShadow = `0px 0px 20px 2px ${backgroundColors[index] && backgroundColors[index][0]
                                        }`;
                                }
                            }}
                            onMouseLeave={() => {
                                var parentView = document.querySelectorAll(".Carousal01");
                                if (parentView && parentView[0]) {
                                    parentView[0].style.boxShadow = `0px 0px 7px 1px ${backgroundColors[index] && backgroundColors[index][0]
                                        }`;
                                }
                            }}
                        >
                            <div className="w-full h-full relative ">
                                <ColorExtractor
                                    getColors={(colors) => handleColors(colors, index)}
                                >
                                    <img
                                        className="carousalbox_img 
                    !h-[100%]"
                                        src={item.image}
                                        alt=""
                                    />
                                </ColorExtractor>
                                <div
                                    className="w-full h-full bg-gradient z-10 absolute top-0 left-0 opacity-[.8]"
                                    style={{
                                        background: `rgb(0,0,0)`,
                                        backgroundImage: `linear-gradient(to right bottom, ${backgroundColors[index]
                                            ? backgroundColors[index][0]
                                            : "transparent"
                                            }
                   
                    , #020202)`,
                                    }}
                                ></div>
                            </div>
                            <div className="carousalbox_content text-color2 relative  h-[100%]">
                                <div
                                    className={`w-[250px] h-[250px] absolute z-[20] top-[-5px] right-[-5px] blur-[90px] opacity-[.9]`}
                                    style={{
                                        background: `rgb(0,0,0)`,
                                        backgroundImage: `linear-gradient(to top, #020202, ${backgroundColors[index]
                                            ? backgroundColors[index][0]
                                            : "transparent"
                                            }
                   
                )`,
                                    }}
                                ></div>
                                <h1
                                    className={`text-[33px] font-[700] mb-[10px]`}
                                    style={{
                                        color:
                                            backgroundColors &&
                                            backgroundColors[index] &&
                                            backgroundColors[index][0],
                                    }}
                                >
                                    Melodies of the Heart
                                </h1>
                                <p className="text-[18px] text-color2">
                                    Welcome to 'Melodies of the Heart: A Night of Soulful
                                    Serenades Beneath the Starlit Sky
                                </p>
                                <div className="carousalbox_locations ">
                                    <div className="carousalbox_locations_box">
                                        {/* <IoLocationOutline /> */}
                                        {/* <ReactSVG src={locationSvg} /> */}
                                        <p
                                            className=""
                                            style={{
                                                color:
                                                    backgroundColors &&
                                                    backgroundColors[index] &&
                                                    backgroundColors[index][0],
                                            }}
                                        >
                                            North California
                                        </p>
                                    </div>
                                    <div className="carousalbox_locations_box">
                                        {/* <MdOutlineCalendarMonth /> */}
                                        {/* <ReactSVG src={calenderSvg} /> */}
                                        <p
                                            className=""
                                            style={{
                                                color:
                                                    backgroundColors &&
                                                    backgroundColors[index] &&
                                                    backgroundColors[index][0],
                                            }}
                                        >
                                            02/09/2023
                                        </p>
                                    </div>
                                    <div className="carousalbox_locations_box">
                                        {/* <CiClock1 /> */}
                                        {/* <ReactSVG src={ClockSvg} /> */}
                                        <p
                                            className=""
                                            style={{
                                                color:
                                                    backgroundColors &&
                                                    backgroundColors[index] &&
                                                    backgroundColors[index][0],
                                            }}
                                        >
                                            4:00 PM
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="my-[22px] carousal_content_btn flex justify-center place-items-center px-[80px] py-[15px] rounded-[10.33px] cursor-pointer gap-[8px]"
                                    style={{
                                        backgroundColor:
                                            backgroundColors &&
                                            backgroundColors[index] &&
                                            backgroundColors[index][0],
                                    }}
                                >
                                    {/* <IoTicketOutline className="text-[25px]" /> */}
                                    {/* <ReactSVG src={TicketSvg} /> */}
                                    <p className="text-[15.5px] font-[400px] text_option">
                                        Get Ticket
                                    </p>
                                </button>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Carousal01;