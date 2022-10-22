import React from "react";
import MainNavigation from "../components/Landing/MainNavigation";
import TopDesign from "../components/Landing/TopDesign";
import WhereIsHamgram from "../components/Landing/WhereIsHamgram";
import { Element } from "react-scroll";
import WhatDoWeDo from "../components/Landing/WhatDoWeDo";
import WhereIsYourPathIcon from "../components/icons/landing/WhereIsYourPathIcon";
import Services from "../components/Landing/Services";
import SuccessfulCompaninos from "../components/Landing/SuccessfulCompaninos";
import Footer from "../components/Landing/Footer";

function LandingPage() {
  return (
    <>
      <MainNavigation />
      <TopDesign />
      <WhereIsHamgram />
      <WhatDoWeDo />

      <Element name="#services">
        <Services />
      </Element>
      <Element name="#successful-companinos">
        <SuccessfulCompaninos />
      </Element>
      <Footer />
    </>
  );
}

export default LandingPage;
