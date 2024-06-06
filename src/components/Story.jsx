"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Story = () => {
  return (
    <div>
      <div className="container px-8 my-8">
        <h1 className="text-2xl text-center py-4 font-playfair">Our Story</h1>
        <div className="bg-[#B7B1A4] rounded-tr-[90px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          <Swiper
            speed={2000}
            direction="vertical"
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="h-[160px]"
          >
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/random/300x300"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/random/300x300"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/random/300x300"
                className="object-cover w-full h-full"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex rounded-b-xl overflow-hidden">
          <div>
            <div className="p-8 bg-slate-200/50 text-sm">
              <h1 className="uppercase font-bold font-playfair text-[#B7B1A4] mb-2">
                Awal Bertemu
              </h1>
              <p>
                Awal mula kami bertemu merupakan teman sejak kecil di bangku
                sekolah
              </p>
            </div>
            <div className="p-8 bg-slate-200/50 text-sm">
              <h1 className="uppercase font-bold font-playfair text-[#B7B1A4] mb-2">
                Menjalin Hubungan
              </h1>
              <p className="font-bold mb-2">12 Agustus 2017</p>
              <p>
                Setelah menjalin kedekatan dan berkomunikasi beberapa bulan dan
                menemukan kecocokan akhirnya kami memutuskan untuk menjalin
                sebuah komitmen
              </p>
            </div>
            <div className="p-8 bg-slate-200/50 text-sm">
              <h1 className="uppercase font-bold font-playfair text-[#B7B1A4] mb-2">
                Bertunangan
              </h1>
              <p className="font-bold mb-2">04 Desember 2022</p>
              <p>
                Setelah menjalin hubungan beberapa tahun, akhirnya kami
                memantapkan hati untuk membawa hubungan ini kejenjang yang lebih
                serius untuk hidup dan menua bersama
              </p>
            </div>
          </div>
          <div className="p-8 bg-[#B7B1A4] w-10 text-sm flex justify-center items-center">
            <p className="text-white font-bold text-nowrap rotate-90">
              Love Story
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
