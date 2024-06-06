import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Countdown from "@/components/Countdown";
import Sambutan from "@/components/Sambutan";
import Mempelai from "@/components/Mempelai";
import Ayat from "@/components/Ayat";
import DetailAcara from "@/components/DetailAcara";
import RSVP from "@/components/RSVP";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";

const playfair = Playfair_Display({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Sambutan />
      <Mempelai />
      <Ayat />
      <DetailAcara />
      <RSVP />
      <Story />
      <Gallery />
    </>
  );
}
