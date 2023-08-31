import React from "react";
import "../css/FloatingDiv.css";

const FloatinDiv = ({ img1, img2 }) => {
  return (
    <div className="floatingDiv">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
    </div>
  );
};

export default FloatinDiv;
