import React from "react";
import "../css/MainPage.css";
import bg from "../images/bg_main.png";
import { motion } from "framer-motion";
import FloatingDiv from "./FloatingDiv";
import JsIcon from "../images/JsIcon.png";
import reactIcon from "../images/reactIcon.png";
import TsIcon from "../images/TsIcon.png";



function MainPage() {
  const photo = { backgroundImage: `url(${bg})` };
  const transition = { duration: 2, type: "spring" };

  return (
    <>
      <div className="section">
        <div id="container">
          <div className="background">
            <div className="img_photo1" style={photo}>
              <div className="i-right">
                <motion.div initial={{ top: "2rem", left: "80%" }} whileInView={{ left: "75%" }} transition={transition} className="floating-div" animate>
                  <FloatingDiv img1={reactIcon} text1="Frontend" text2="Developer" />
                </motion.div>
                <motion.div initial={{ left: "9rem", top: "17rem" }} whileInView={{ left: "15%" }} transition={transition} className="floating-div">
                  <FloatingDiv img1={JsIcon} text1="Frontend" text2="Developer" />
                </motion.div>
                <motion.div initial={{ left: "9rem", top: "28rem" }} whileInView={{ left: "68%" }} transition={transition} className="floating-div">
                  <FloatingDiv img1={TsIcon} text1="Frontend" text2="Developer" />
                </motion.div>
              </div>
            </div>

          </div>

          <div className="content">
            <div className="sub_title">
              코드의 조화와 흐름을 둥글게 이끄는 프론트엔드 개발자
              <span className="overlay_effect"></span>
            </div>

            <div className="title">
              <span style={{ color: "sandybrown" }}>Yoon</span> jae
              <span className="overlay_effect"></span>
            </div>

            <div className="btn_main">
              <button
                type="button"
                className="btn_white"
                onClick={() => {
                  window.open("https://github.com/davidcool0117");
                }}
              >
                깃허브
              </button>
              <button
                type="button"
                className="btn_black"
                onClick={() => {
                  /* window.open("https://drive.google.com/file/d/1V8ZSojzMG2HadTuA4qhMYwd5dP79axCM/view?usp=sharing"); */
                }}
              >
                이력서
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
