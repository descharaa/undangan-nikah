"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Mempelai() {
  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-2xl text-center font-playfair">Bride & Groom</h1>
        <div className="flex my-8 justify-between">
          <div>
            <img
              src="https://source.unsplash.com/random/250x250"
              alt="mempelai"
              width={250}
              height={250}
              className="rounded-xl"
            />
            <div className="my-4 text-center">
              <h1 className="text-lg font-playfair font-bold py-2">
                Fitria Nur Parida
              </h1>
              <p className="text-xs">
                Putri Ke 2 Bapak Yayan Sutisna & Ibu Yandriyani (Almh)
              </p>
              <button className="p-2 mx-auto my-4 text-white bg-[#B7B1A4] rounded-xl flex justify-center items-center gap-3">
                <FaInstagram />
                <p>Nama</p>
              </button>
            </div>
          </div>

          <h1 className="w-fit h-fit rotate-90 translate-y-7 text-lg">
            The Bride
          </h1>
        </div>
        <div className="flex flex-row-reverse my-8 justify-between">
          <div>
            <img
              src="https://source.unsplash.com/random/250x250"
              alt="mempelai"
              width={250}
              height={250}
              className="rounded-xl"
            />
            <div className="my-4 text-center">
              <h1 className="text-lg font-playfair font-bold py-2">
                Fitria Nur Parida
              </h1>
              <p className="text-xs">
                Putri Ke 2 Bapak Yayan Sutisna & Ibu Yandriyani (Almh)
              </p>
              <button className="p-2 mx-auto my-4 text-white bg-[#B7B1A4] rounded-xl flex justify-center items-center gap-3">
                <FaInstagram />
                <p>Nama</p>
              </button>
            </div>
          </div>

          <h1 className="w-fit h-fit -rotate-90 translate-y-7 text-lg">
            The Groom
          </h1>
        </div>
      </div>
    </div>
  );
}
