"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function StoryCarousel({ slides }) {
  return (
    <div className="stories-wrapper w-full h-screen flex items-center justify-center">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={"auto"}
        centeredSlides={true}
        className="w-full h-full"
      >
        {slides.map((SlideComp, idx) => (
          <SwiperSlide
            key={idx}
            className="flex items-center justify-center"
            style={{ width: "80%", height: "100%" }} // slide width controls peek
          >
            <div className="slide-inner w-full h-full flex items-center justify-center">
              {SlideComp}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}