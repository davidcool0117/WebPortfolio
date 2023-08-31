import React from "react";
import lottie from "lottie-web";
import lottieAni from "./Giftbox.json";

const Lottie = () => {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#ani"),
      animationData: lottieAni,
      loop: true, // boolean
      autoplay: true, // boolean
    });
  }, []);
  return <div id="ani" style={{ width: 100, height: 100 }}></div>;
};
export default Lottie;
