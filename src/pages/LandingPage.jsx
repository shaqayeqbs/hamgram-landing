import React from "react";
import TopDesign from "../components/Landing/TopDesign";
import WhereIsHamgram from "../components/Landing/WhereIsHamgram";
import { Element } from "react-scroll";
import WhatDoWeDo from "../components/Landing/WhatDoWeDo";
// import WhereIsYourPathIcon from "../components/icons/landing/WhereIsYourPathIcon";

import SuccessfulCompaninos from "../components/Landing/SuccessfulCompaninos";

const Services = React.lazy(() => import("../components/Landing/Services"));

function LandingPage() {
  return (
    <React.Suspense fallback={<>...Loading</>}>
      <TopDesign />
      <WhereIsHamgram />
      <WhatDoWeDo />

      <Element name="#services">
        <Services />
      </Element>
      <Element name="#successful-companinos">
        <SuccessfulCompaninos />
      </Element>
    </React.Suspense>
  );
}

export default LandingPage;
