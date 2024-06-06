import React from "react";

const RSVP = () => {
  return (
    <div className="bg-[#B7B1A4]">
      <div className="container px-8">
        <div className="h-[280px] pt-8">
          <img
            src="https://source.unsplash.com/random/300x300"
            className="rounded-tl-[40%] rounded-br-[40%] object-cover w-full h-full"
            alt=""
          />
        </div>
        <h1 className="text-2xl text-white font-playfair italic pb-4">RSVP</h1>
        <p className="text-white text-sm">
          Kirimkan Konfirmasi Kehadiran Kepada Mempelai Melalui Form Berikut.
        </p>
        <form action="" className="py-8 space-y-2">
          <input
            type="text"
            name=""
            className="w-full p-2 rounded"
            placeholder="Nama Lengkap"
            id=""
          />
          <input type="number" name="" className="w-full p-2 rounded" id="" />
          <button className="w-full p-2 rounded border-2 border-[#eeebe4] bg-white text-[#B7B1A4]">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default RSVP;
