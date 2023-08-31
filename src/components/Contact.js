import React, { useRef } from "react";
import "../css/Contact.css";
import bg from "../images/bg_gift.png";
import cont from "../images/img_contact.png";
import paper from "../images/img_paper.svg";
import emailjs from "@emailjs/browser";
import Right from "../lottie/arr_rigt";

function Contact() {
  const photo = { backgroundImage: `url(${bg})` };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_mgkb7kw", "template_nfiej14", form.current, "UZN4rZao8_DY7x1Aw").then(
      (result) => {
        alert("이메일 전송이 완료되었습니다. 보내주셔서 감사합니다!:)");
        console.log(result.text);
      },
      (error) => {
        alert("전송실패.");
        console.log(error.text);
      }
    );
  };

  return (
    <div className=" section section_last" style={{ height: "55vh !important" }}>
      <div className="shape_top">
        <img src={paper} alt="paper" />
      </div>
      <div className="sec4_bg" style={photo}>
        <div className="overlay"></div>
      </div>

      <div className="txt_inner">
        <div>
          <h3>
            Contact <br />
            Me!
            <br />
          </h3>
          <p className="info">이메일 : davidcool0117@gmail.com</p>
          <br />
          <p className="info">휴대폰 : 010 - 3204 - 9110</p>
        </div>

        <div className="center_box">
          <div className="cir_contact">
            <img className="img_cont" src={cont} alt="contact profile" />
          </div>
          <div>
            <p>저의 포트폴리오를 봐 주셔서 감사합니다.</p>
            <p>항상 열정을 잃지않는 신입이 되도록 노력하겠습니다.</p>
            <p>궁금하신 사항이 있거나 빠른답변을 원하시면 오른쪽 이메일로 보내주시면 감사하겠습니다.</p>
          </div>
          <Right />
        </div>
        {/* 이메일 양식 */}
        <form ref={form} onSubmit={sendEmail} className="form_email">
          <label>보내시는 분 성함</label>
          <input type="text" name="user_name" className="input_email" required />
          <label>이메일 주소</label>
          <input type="email" name="user_email" className="input_email" required />
          <label>보내고 싶은 메시지</label>
          <textarea name="message" className="input_email" required />
          <input type="submit" value="보내기" className="send_email" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
