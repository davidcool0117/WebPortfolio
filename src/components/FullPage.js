import React from "react";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import PortFolio from "./PortFolio";
import Contact from "./Contact";
function FullPage() {
  return (
    <div>
      <MainPage />
      <AboutPage />
      <PortFolio />
      <Contact />
    </div>
  );
}

export default FullPage;
