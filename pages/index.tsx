import Head from "next/head";
import { useState } from "react";
import Modal from "./modal";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/mainBanner";
import Keterangan from "../components/organisms/Keterangan";
import CountDown from "../components/organisms/countDown";
import Invitation from "../components/organisms/Invitation";
import CalonPasangan from "../components/organisms/calonPasangan";
import WeedingLocation from "../components/organisms/WeedingLocation";
import Maps from "../components/organisms/Maps";
import Gallery from "../components/organisms/Gallery";
import Amplop from "../components/organisms/Amplop";
import Privasi from "../components/organisms/Privasi";
import Footer from "../components/organisms/Footer";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <>
      <Modal isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Navbar />
      <MainBanner />
      <Keterangan />
      <CountDown />
      <Invitation />
      <CalonPasangan />
      <WeedingLocation />
      <Maps />
      <Gallery />
      <Amplop />
      <Privasi />
      <Footer />
    </>
  );
}
