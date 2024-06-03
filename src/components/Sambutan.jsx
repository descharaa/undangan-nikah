"use client";
import { Playfair_Display } from "next/font/google";
import Countdown from "./Countdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Sambutan() {
  return (
    <>
      <div
        className={`w-full h-screen text-white bg-slate-400 flex flex-col justify-end  font-playfair`}
      >
        <div className="w-full py-8">
          <h1
            className={`text-lg uppercase font-light text-center font-openSans`}
          >
            the wedding of
          </h1>
          <h1 className="text-5xl text-center mb-4">Tiara & Jati</h1>
          <Countdown />
        </div>
      </div>
      <div className="bg-[#B7B1A4] text-white">
        <div className="container mx-auto">
          <h1 className="text-sm text-center py-8">Assalamualaikum Wr. Wb.</h1>
          <p className="text-xs text-center px-7">
            Segala Puji Bagi Allah SWT yang telah menjadikan hambanya hidup
            berpasang-pasangan. Dengan memohon Ridho, Rahmat, dan Berkah Allah
            SWT, kami bermaksud untuk mengundang Saudara/i dalam acara
            pernikahan yang kami selenggarakan.
          </p>
        </div>
        <div className="container mx-auto p-8 mb-[-60px]">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            speed={2000}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="h-[65px]"
          >
            <SwiperSlide>
              <div className="w-full h-full bg-red-400 rounded-full"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-red-400 rounded-full"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-red-400 rounded-full"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-red-400 rounded-full"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-red-400 rounded-full"></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="h-[50px] bg-[#F0F5FA]"></div>
      </div>
    </>
  );
}
