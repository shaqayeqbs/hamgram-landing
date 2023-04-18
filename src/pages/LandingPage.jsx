import React from "react";
import TopDesign from "../components/Landing/TopDesign";
import WhereIsHamgram from "../components/Landing/WhereIsHamgram";
import { Element } from "react-scroll";
import WhatDoWeDo from "../components/Landing/WhatDoWeDo";
// import WhereIsYourPathIcon from "../components/icons/landing/WhereIsYourPathIcon";

import SuccessfulCompaninos from "../components/Landing/SuccessfulCompaninos";

import Services from "../components/Landing/Services";

function LandingPage() {
  return (
    <>
      <TopDesign />
      <WhereIsHamgram />
      <WhatDoWeDo />

      <Element name="#services">
        <Services />
      </Element>
      <Element name="#successful-companinos">
        <SuccessfulCompaninos />
      </Element>
    </>
  );
}

export default LandingPage;
