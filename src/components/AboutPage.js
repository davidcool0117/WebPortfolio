import React from "react";
import "../css/About.css";

/* img root */
import bg from "../images/bg_main.png";
import html from "../images/img_html.png";
import css3 from "../images/img_css3.png";
import jq from "../images/img_jquery.png";
import php from "../images/img_php.png";
import js from "../images/img_javascript.png";
import ts from "../images/img_typescript.png";
import react from "../images/img_react.png";
import sass from "../images/img_sass.png";
import nodejs from "../images/img_nodejs.png";
import figma from "../images/img_figma.png";

function AboutPage() {
  const photo = { backgroundImage: `url(${bg})` };

  return (
    <div className="section">
      <div id="container">
        <div className="contents">
          <div className="inner">
            <div className="left">
              <div className="img_about" style={photo}></div>
            </div>

            <div className="right">
              <div className="about_txt">
                <span className="txt_1">About Me</span>
                <h2>
                  코드로 <span className="mark">선물</span>을 만들어 즐거움을 주는 <br />
                  프론트엔드 신입개발자 <span className="mark">이윤재</span> 입니다.
                </h2>
                <div className="about_contents">
                  <div>
                    <h4>학력</h4>
                    <ul>
                      <li>2018. 02. - 한국폴리텍대학교 방송영상학과 졸업</li>
                      <li>2023. 02. - 고려사이버대 빅데이터과 졸업 (학사)</li>
                    </ul>
                  </div>
                  <div>
                    <h4>자격 및 수료</h4>
                    <ul>
                      <li>2016. 07. - 독립기념관 UCC 금상</li>
                      <li>2021. 06. - G-TELP (level2)</li>
                      <li>2023. 05. - 그린컴퓨터아카데미 프론트엔드 웹&앱 과정 수료</li>
                    </ul>
                  </div>
                  <div>
                    <h4>사용기술</h4>
                    <ul className="skill_box">
                      <li>
                        <img src={react} alt="React icon" /> React
                      </li>
                      <li>
                        <img src={nodejs} alt="Nodejs icon" /> Nodejs
                      </li>
                      <li>
                        <img src={js} alt="Javascript icon" /> JavaScript
                      </li>
                      <li>
                        <img src={ts} alt="PHP icon" /> TypeScript
                      </li>
                      <li>
                        <img src={html} alt="html icon" /> HTML5
                      </li>
                      <li>
                        <img src={css3} alt="css3 icon" /> CSS3
                      </li>
                      <li>
                        <img src={jq} alt="jQuery icon" /> jQuery
                      </li>
                      <li>
                        <img src={sass} alt="Sass sass" /> Sass
                      </li>
                      <li>
                        <img src={figma} alt="figma icon" /> Figma
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
