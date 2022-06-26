import React from "react";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser, BiMessageSquareDetail } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";

export default function header({ isPlaying }: any) {
  const [activeNav, setActiveNav] = useState("#");

  // console.log(onPlaySound);
  const PlayPause = () => {
    console.log(isPlaying);
    // setIsPlaying(!isPlaying);
  };
  return (
    <>
      <div className="container">
        <div className="nav">
          <a
            href="/#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <AiOutlineHome />
          </a>
          <a
            href="#weadingDate"
            onClick={() => setActiveNav("#weadingDate")}
            className={activeNav === "#weadingDate" ? "active" : ""}
          >
            <BiUser />
          </a>
          <a
            href="#keterangan"
            onClick={() => setActiveNav("#keterangan")}
            className={activeNav === "#keterangan" ? "active" : ""}
          >
            <FiBook />
          </a>
          <a
            href="#invitation"
            onClick={() => setActiveNav("#invitation")}
            className={activeNav === "#invitation" ? "active" : ""}
          >
            <RiServiceLine />
          </a>
          <a
            href="#maps"
            onClick={() => setActiveNav("#maps")}
            className={activeNav === "#maps" ? "active" : ""}
          >
            <BiMessageSquareDetail />
          </a>
        </div>
        <div className="play-pause"></div>
      </div>
    </>
  );
}