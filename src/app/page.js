import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Countdown from "@/components/Countdown";
import Sambutan from "@/components/Sambutan";
import Mempelai from "@/components/Mempelai";

const playfair = Playfair_Display({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Sambutan />
      <Mempelai />
    </>
  );
}
