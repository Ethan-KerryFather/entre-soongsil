import "../styles/Home.scss";
import React from "react";
import NaviBar from "../partComponent/NaviBar";
import Footer from "../partComponent/Footer";
import { useNavigate } from "react-router-dom";
import { useWindupString } from "windups";
export default function Home() {
  const [text1] = useWindupString("내가 사는 위스키가 제일 저렴하다!");
  const goto = useNavigate();
  return (
    <div id="container">
      <NaviBar id="navibar" />
      <div className="front-container">
        <div className="Video-Section">
          <video autoPlay loop muted playsInline poster="image/background.jpg">
            <source src="video/video2.mp4" type="video/mp4" />
            Browser not support this video
          </video>
        </div>
        <div className="front-texts">
          <p className="text1">전지적 애주가시점</p>
          <p className="text2">{text1}</p>
          <p className="text3">잘 마시고 잘 파는 건강한 음주생활</p>
          <div className="button-frame">
            <div className="front-button">
              <p
                onClick={() => {
                  goto("/Experience");
                }}
              >
                저희 서비스를 소개합니다
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
