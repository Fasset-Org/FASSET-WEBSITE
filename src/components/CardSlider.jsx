import React from "react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../images/AGM.jpg";
import slide_image_2 from "../images/Mandela Day.jpg";
import slide_image_3 from "../images/Nkandla.jpg";
import slide_image_4 from "../images/Website-Deadline-Extension.png";
import slide_image_5 from "../images/background.jpg";
import slide_image_6 from "../images/bgImage1.avif";
import slide_image_7 from "../images/istockphoto-1085287936-612x612.jpg";

register();

const CardSlider = () => {
  return (
    <div className="container">
      <h1 className="heading">Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow bd">
            <ArrowBackIcon />
          </div>
          <div className="swiper-button-next slider-arrow bd">
            <ArrowForwardIcon />
          </div>
          <div className="swiper-pagination bd"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default CardSlider;
