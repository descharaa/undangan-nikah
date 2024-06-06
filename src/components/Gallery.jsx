"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css/thumbs";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  console.log(thumbsSwiper);

  return (
    <div>
      <div className="container px-8">
        <h1 className="text-2xl text-center py-4 font-playfair">Gallery</h1>
        <div className="my-8">
          <Swiper
            loop={true}
            spaceBetween={10}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            thumbs={{ swiper: thumbsSwiper }}
            speed={2000}
            modules={[Thumbs, Autoplay]}
            className="h-[300px]"
          >
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/random?food"
                className="object-cover w-full h-full "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/random?coffee"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/random?people"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/random?buildings"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/random?travel"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/random?beach"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs, Autoplay]}
            className="mt-4 h-[50px]"
          >
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/random?food"
                className={`object-cover w-full h-full  ${
                  activeIndex === 0 ? "opacity-100" : "opacity-20"
                }`}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/random?coffee"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/random?people"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/random?buildings"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/random?travel"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/random?beach"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
