import React from "react";
import Footer from "../partComponent/Footer";
import NaviBar from "../partComponent/NaviBar";
import { useWindupString } from "windups";

import "../styles/Experience.scss";
export default function Experience() {
  return (
    <div id="container">
      <NaviBar id="navibar" />
      <div className="front-container">
        <div
          style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}
        >
          <iframe
            src="https://onedrive.live.com/embed?cid=A581D305D3D85C3C&resid=A581D305D3D85C3C%21264&authkey=AJPjXCceBC5Ao3k&em=2"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            title="iframe"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
