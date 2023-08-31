import React, { useState } from "react";
import exhib from "../images/img_grad2.jpg";

const Grad_project = () => {
  let [exhibit, setExhibit] = useState(0);
  let [btn_tit, setbtn_tit] = useState("캡스톤 디자인 전시 사진");
  return (
    <div>
      <div className="slide">
        <div id="container">
          <h1 className="title_s screen_out">졸업작품 프로젝트 설계서</h1>
          <div className="project_box">
            <div className="box_inner">
              <div className="box_left">
                <span className="num_p">04</span>
                <div className="contents_">
                  <span className="title_p">졸업작품 프로젝트 설계서</span>
                  <div className="img_left">
                    <div className="desc">
                      {exhibit === 1 ? (
                        <img src={exhib} alt="캡스톤디자인 전시 사진" className="exhib" />
                      ) : (
                        <div style={{ margin: "80px 0 20px" }}>
                          <h4>'자판기 네트워크 관리 시스템'</h4>
                          <br />
                          <p>
                            본 설계서는 졸업작품을 만들기 전 소프트웨어공학 수업에서 기획하여 만들어 본 설계서입니다. 이 프로젝트는 가상의 클라이언트(자판기)에 센서를 부착하여 데이터를 실시간 서버로 전송하여 관리할 수 있게끔 기획해 본 프로젝트입니다. 지금까지
                            <a href="https://www.happycampus.com/report-doc/16847020/">&nbsp;해피캠퍼스</a>라는 리포트 판매 사이트에서 총 80회 정도 팔리고 있습니다.
                          </p>
                        </div>
                      )}

                      <button
                        onClick={() => {
                          btn_tit === "캡스톤 디자인 전시 사진" ? setbtn_tit("요약설명보기") : setbtn_tit("캡스톤 디자인 전시 사진");
                          exhibit === 1 ? setExhibit(0) : setExhibit(1);
                        }}
                      >
                        {btn_tit}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box_right">
                <div className="info_project">
                  <div>
                    <h5 className="title_">사용 기술</h5>
                    <ul>
                      <li style={{ letterSpacing: "1px" }}>- java, Tomcat(WebSocket)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="title_">팀인원수 / 기여도 / 작업기간 </h5>
                    <ul>
                      <li>- 3명 / 30% / 10주 </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="title_">기여한 부분</h5>
                    <ul>
                      <li>
                        - 클라이언트 자판기(raspberry pi + Piface) 부분 설계 및 개발
                        <ul className="list_sty">
                          <li>
                            라즈베리파이 내장 버튼 클릭 시 음료수 양 카운트 전송(
                            <a href="https://www.youtube.com/@MrWas7894" target="_blank" rel="noreferrer">
                              <i>test영상</i>
                            </a>
                            )
                          </li>
                          <li> 온습도, 충격센서 등 연결 라즈베리파이 - 웹소켓 - 웹 대시보드 출력</li>
                        </ul>
                        <li> - 캡스톤 디자인 링크사업단 종합 과제 보고서 및 예산관리, 회의록 작성</li>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box_btn">
                  <button
                    type="button"
                    className="btn_n"
                    onClick={() => {
                      window.open("https://drive.google.com/file/d/1YfOi_NiNyZJEGYWFNUOsQLK4SVpqYw6t/view?usp=sharing");
                    }}
                  >
                    요구사항분석서
                  </button>
                  <button
                    type="button"
                    className="btn_n"
                    onClick={() => {
                      window.open("https://drive.google.com/file/d/1f5S8n8IUSGLXEJRmrvwUgcZagvSGeby0/view?usp=sharing");
                    }}
                  >
                    개발계획서
                  </button>
                  <button
                    type="button"
                    className="btn_p"
                    onClick={() => {
                      window.open("https://drive.google.com/file/d/1eIlEjgVIkBH8CMCEVqyD_b2REm4cDEP7/view?usp=sharing");
                    }}
                  >
                    설계명세서
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grad_project;
