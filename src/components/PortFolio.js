import React, { useRef } from "react";
import "../css/PortFolio.css";
import p1 from "../images/port_komsco.png";
import p2 from "../images/port_perpet.png";
import p3 from "../images/port_yorijori.png";
import p4 from "../images/port_portfolio.png";

function PortFolio() {
  const bg = useRef(null);
  const thumb = useRef(null);
  const img = useRef(null);

  const bg2 = useRef(null);
  const thumb2 = useRef(null);
  const img2 = useRef(null);

  const bg3 = useRef(null);
  const thumb3 = useRef(null);
  const img3 = useRef(null);

  const bg4 = useRef(null);
  const thumb4 = useRef(null);
  const img4 = useRef(null);

  const pro1 = { backgroundImage: `url(${p1})` };
  const pro2 = { backgroundImage: `url(${p2})` };
  const pro3 = { backgroundImage: `url(${p3})` };
  const pro4 = { backgroundImage: `url(${p4})` };

  function scroll() {
    const bgH = bg.current.clientHeight;
    const imgH = img.current.clientHeight;
    const scrollVal = bgH - imgH;
    thumb.current.style.top = scrollVal + "px";
  }

  function scroll2() {
    const bgH = bg2.current.clientHeight;
    const imgH = img2.current.clientHeight;
    const scrollVal = bgH - imgH;
    thumb2.current.style.top = scrollVal + "px";
  }

  function scroll3() {
    const bgH = bg3.current.clientHeight;
    const imgH = img3.current.clientHeight;
    const scrollVal = bgH - imgH;
    thumb3.current.style.top = scrollVal + "px";
  }

  function scroll4() {
    const bgH = bg4.current.clientHeight;
    const imgH = img4.current.clientHeight;
    const scrollVal = bgH - imgH;
    thumb4.current.style.top = scrollVal + "px";
  }

  return (
    <div className="section">
      <div className="bg_secp">
        <div className="slide">
          <div id="container">
            <h1 className="title_s screen_out">한국조폐공사 project</h1>
            <div className="project_box">
              <div className="box_inner">
                <div className="box_left">
                  <span className="num_p">01</span>
                  <div className="contents_">
                    <span className="title_p">한국조폐공사 (관공서 페이지)</span>
                    <div className="capture">
                      <div
                        ref={bg}
                        className="bg"
                        onMouseOver={() => {
                          scroll();
                        }}
                        onMouseLeave={() => {
                          thumb.current.style.top = 0;
                        }}
                      >
                        <a ref={thumb} href="https://davidcool0117.github.io/firstproject/" target="_blank" className="thumb" rel="noreferrer">
                          <span ref={img} style={pro1}></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box_right">
                  <div className="info_project">
                    <div>
                      <h5 className="title_">사용 기술</h5>
                      <ul>
                        <li style={{ letterSpacing: "1px" }}>- HTML, CSS, Javascript, jQuery </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">기여도 / 작업기간 </h5>
                      <ul>
                        <li>- 100% / 4주 </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">기능 구현</h5>
                      <ul>
                        {/* <li>- 웹 표준을 고려한 시멘틱 마크업 설계 </li> */}
                        <li>- PC와 모바일 대응이 가능한 반응형 웹 적용 </li>
                        <li>- Javascript, jQuery 를 이용하여 각각 슬라이드 구현</li>
                        <li>- 푸터 퀵 메뉴를 확인할 수 있는 Non-Modal 노출 기능 구현</li>
                        <li>
                          -
                          <a href="https://analytics.google.com/analytics/web/?hl=ko&pli=1#/p346910606/reports/reportinghub?params=_u..nav%3Dmaui" target="_blank" rel="noreferrer">
                            구글 애널리틱스
                          </a>
                          &nbsp;적용하여 방문자의 데이터 웹 로그 분석 가능
                        </li>
                        <li>
                          -
                          <a href="https://www.data.go.kr/data/15084084/openapi.do" target="_blank" rel="noreferrer">
                            공공데이터포털
                          </a>
                          &nbsp;api를 활용하여 기상정보 및 대기환경 정보 파싱
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box_btn">
                    <button
                      type="button"
                      className="btn_n"
                      onClick={() => {
                        window.open("https://github.com/davidcool0117/firstproject");
                      }}
                    >
                      깃허브
                    </button>
                    <button
                      type="button"
                      className="btn_p"
                      onClick={() => {
                        window.open("https://davidcool0117.github.io/firstproject/");
                      }}
                    >
                      사이트
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div id="container">
            <h1 className="title_s screen_out">PerPet 반려동물 용품 팀프로젝트</h1>
            <div className="project_box">
              <div className="box_inner">
                <div className="box_left">
                  <span className="num_p">02</span>
                  <div className="contents_">
                    <span className="title_p">PerPet (반려동물 용품 - 리액트)</span>
                    <div className="capture">
                      <div
                        ref={bg2}
                        className="bg"
                        onMouseOver={() => {
                          scroll2();
                        }}
                        onMouseLeave={() => {
                          thumb2.current.style.top = 0;
                        }}
                      >
                        <a ref={thumb2} href="https://github.com/wooyoung6685/perpet" target="_blank" className="thumb" rel="noreferrer">
                          <span ref={img2} style={pro2}></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box_right">
                  <div className="info_project">
                    <div>
                      <h5 className="title_">사용 기술</h5>
                      <ul>
                        <li style={{ letterSpacing: "1px" }}>- React, JavaScript, Node.js, Sequelize, Figma</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">팀인원수 / 기여도 / 작업기간 </h5>
                      <ul>
                        <li>- 4명 / 30% / 3주 </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">기능 구현</h5>
                      <ul>
                        <li>- 상품을 등록하며 할인율 입력시 할인가 자동변경 </li>
                        <li>- 할인가가 있을 경우 할인가 상품목록 구역에 업로드
                          <br />
                          (NodeJs + Multer 파일 업로드 처리)
                        </li>
                        <li>- 상품 클릭시 상세페이지로 이동 → 상품 설명이 나오는 상세페이지 화면 렌더링</li>
                        <li>- 결제 버튼 클릭시 메인페이지 렌더, 결제된 상품 soldout</li>
                        <li>
                          - axios RESTful API 요청을 보내고 응답 값 파싱 및 처리
                          <br />
                          (상품 업로드 페이지, 상품 상세 페이지 구현, 상품결제시 soldout 처리)
                        </li>
                        <li>- PWA(Progressive Web Application)앱 배포</li>
                      </ul>
                    </div>
                  </div>
                  <div className="box_btn">
                    <button
                      type="button"
                      className="btn_n"
                      onClick={() => {
                        window.open("https://github.com/wooyoung6685/perpet");
                      }}
                    >
                      깃허브
                    </button>
                    <button
                      type="button"
                      className="btn_n"
                      onClick={() => {
                        window.open("https://github.com/wooyoung6685/perpetserver");
                      }}
                    >
                      깃허브-서버
                    </button>
                    <button
                      type="button"
                      className="btn_p"
                      onClick={() => {
                        window.open("https://www.figma.com/file/MEz6EUier3DwqKXYA5GoS8/3%EC%A1%B0--PERPET_project?type=design&mode=design&t=6Qy78wV40A1pUcoY-1");
                      }}
                    >
                      회의
                    </button>
                    <button
                      type="button"
                      className="btn_p"
                      onClick={() => {
                        window.open("https://per-pet.vercel.app/");
                      }}
                    >
                      사이트
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div id="container">
            <h1 className="title_s screen_out">Bootstrap YORIJORI 레시피추천사이트 프로젝트</h1>
            <div className="project_box">
              <div className="box_inner">
                <div className="box_left">
                  <span className="num_p">03</span>
                  <div className="contents_">
                    <span className="title_p">YORIJORI (레시피 추천 사이트)</span>
                    <div className="capture">
                      <div
                        ref={bg3}
                        className="bg"
                        onMouseOver={() => {
                          scroll3();
                        }}
                        onMouseLeave={() => {
                          thumb3.current.style.top = 0;
                        }}
                      >
                        <a ref={thumb3} href="https://kimminjung96.github.io/YORIJORI/" target="_blank" rel="noreferrer" className="thumb">
                          <span ref={img3} style={pro3}></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box_right">
                  <div className="info_project">
                    <div>
                      <h5 className="title_">사용 기술</h5>
                      <ul>
                        <li style={{ letterSpacing: "1px" }}>- HTML, SCSS, JavaScript, Bootstrap  </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">팀인원수 / 기여도 / 작업기간</h5>
                      <ul>
                        <li>- 5명 / 30% / 2주</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">기능 구현</h5>
                      <ul>
                        <li>- 소개카드 구현(SCSS로 동적인 애니메이션 구현)</li>
                        <li>- 스크롤시 생성되는 사이드 퀵 네비바 기능 구현 (JavaScript사용)</li>
                        <li>
                          - async/await 해외 api 활용하여 음식 영양소 및 이미지 화면 출력
                          <a href="https://www.edamam.com/" target="_blank" rel="noreferrer">
                            <i>(api : adamam)</i>
                          </a>
                        </li>
                        <li>- Bootstrap과 SCSS를 활용한 반응형 페이지 구현</li>
                      </ul>
                    </div>
                  </div>
                  <div className="box_btn">
                    <button
                      type="button"
                      className="btn_n"
                      onClick={() => {
                        window.open("https://github.com/kimminjung96/YORIJORI");
                      }}
                    >
                      깃허브
                    </button>
                    <button
                      type="button"
                      className="btn_n"
                      onClick={() => {
                        window.open("https://drive.google.com/file/d/1IRXlQxAo6fJxmf3fEp0DNBGyAKjgfFa6/view?usp=sharing");
                      }}
                    >
                      기획서
                    </button>
                    <button
                      type="button"
                      className="btn_p"
                      onClick={() => {
                        window.open("https://kimminjung96.github.io/YORIJORI/");
                      }}
                    >
                      사이트
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div id="container">
            <h1 className="title_s screen_out">웹 포트폴리오</h1>
            <div className="project_box">
              <div className="box_inner">
                <div className="box_left">
                  <span className="num_p">04</span>
                  <div className="contents_">
                    <span className="title_p">웹 포트폴리오 (리액트)</span>
                    <div className="capture">
                      <div
                        ref={bg4}
                        className="bg"
                        onMouseOver={() => {
                          scroll4();
                        }}
                        onMouseLeave={() => {
                          thumb4.current.style.top = 0;
                        }}
                      >
                        <a ref={thumb4} href="https://web-portfolio-gold-five.vercel.app/" target="_blank" rel="noreferrer" className="thumb">
                          <span ref={img4} style={pro4}></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box_right">
                  <div className="info_project">
                    <div>
                      <h5 className="title_">사용 기술</h5>
                      <ul>
                        <li style={{ letterSpacing: "1px" }}>- React, SCSS, JavaScript, Bootstrap  </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_"> 기여도 / 작업기간</h5>
                      <ul>
                        <li>- 100% / 1주</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="title_">기능 구현</h5>
                      <ul>
                        <li>- 풀페이지로 구성 (React)</li>
                        <li>- 메인 페이지 동적 애니메이션 요소 추가(JavaScript)</li>
                        <li>- 마우스 포인터 효과 (JavaScript)</li>
                        <li>- Bootstrap과 SCSS를 활용한 반응형 페이지 구현</li>
                      </ul>
                    </div>
                  </div>
                  <div className="box_btn">
                    <button
                      type="button"
                      className="btn_n"
                      onClick={() => {
                        window.open("https://github.com/davidcool0117/WebPortfolio");
                      }}
                    >
                      깃허브
                    </button>
                    <button
                      type="button"
                      className="btn_p"
                      onClick={() => {
                        window.open("https://web-portfolio-gold-five.vercel.app/");
                      }}
                    >
                      사이트
                    </button>
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

export default PortFolio;
