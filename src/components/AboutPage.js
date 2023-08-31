import React from "react";
import "../css/About.css";

/* img root */
import bg from "../images/bg_main.png";
import html from "../images/img_html.png";
import css3 from "../images/img_css3.png";
import jq from "../images/img_jquery.png";
import php from "../images/img_php.png";
import js from "../images/img_javascript.png";
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
                  둥글고 <span className="mark">협력적인 자세</span>를 가지고 있는 <br />
                  프론트엔드 신입개발자 <span className="mark">이윤재</span> 입니다.
                </h2>
                <div className="about_contents">
                  <div>
                    <h4>교육</h4>
                    <ul>
                      <li>고려사이버대학 빅데이터전공</li>
                      <li>그린컴퓨터아카데미 프론트과정 수료</li>
                    </ul>
                  </div>
                  <div>
                    <h4>자격증</h4>
                    <ul>
                      <li>정보처리기사</li>
                      <li>컴퓨터활용능력2급</li>
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
                        <img src={php} alt="PHP icon" /> PHP
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
