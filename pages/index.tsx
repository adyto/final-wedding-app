import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Modal from "./modal";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/mainBanner";

const Home: NextPage = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Navbar />
      <MainBanner />
    </>
  );
};

export default Home;
