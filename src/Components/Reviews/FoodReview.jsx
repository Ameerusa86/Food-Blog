import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import { EffectCoverflow, Pagination } from "swiper";
import Card from "./Card/Card";
// Import Slider Images
import img1 from "../../assets/review-1.jpg";
import img2 from "../../assets/review-2.jpg";
import img3 from "../../assets/review-3.jpg";
import img4 from "../../assets/review-4.jpg";

const FoodReview = () => {
  return (
    <>
      <Swiper
        id="FoodReviews"
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card
            title="Chicken"
            rating={`Rating: 5`}
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            imgSrc={img1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Salad"
            rating={`Rating: 4.5`}
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            imgSrc={img2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Steak"
            rating={`Rating: 4.8`}
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            imgSrc={img3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="Donuts"
            rating={`Rating: 4.7`}
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            imgSrc={img4}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FoodReview;
