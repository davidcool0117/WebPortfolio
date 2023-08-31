import React from "react";
import lottie from "lottie-web";
import lottieAni2 from "./right_arrow.json";

const Arr_rigt = () => {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#ani2"),
      animationData: lottieAni2,
      loop: true, // boolean
      autoplay: true, // boolean
    });
  }, []);
  return <div id="ani2" style={{ width: 100, height: 100 }}></div>;
};

export default Arr_rigt;
