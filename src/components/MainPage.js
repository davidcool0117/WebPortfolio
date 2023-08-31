import React from "react";
import "../css/MainPage.css";
import bg from "../images/bg_main.png";

function MainPage() {
  const photo = { backgroundImage: `url(${bg})` };

  return (
    <>
      <div className="section">
        <div id="container">
          <div className="background">
            <div className="img_photo1" style={photo}></div>
          </div>

          <div className="content">
            <div className="sub_title">
              발전과 발견을 중시하는 개발자
              <span className="overlay_effect"></span>
            </div>

            <div className="title">
              <span style={{ color: "white" }}>Yoon</span> jae
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
