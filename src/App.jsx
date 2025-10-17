import React, { useState, Suspense, lazy } from "react";
import OurProcess from "./pages/ourProcess";
import AboutUs from "./pages/About";

// Lazy imports
const Nav = lazy(() => import("./components/Nav"));
const Home = lazy(() => import("./pages/Home"));
const Service = lazy(() => import("./pages/Service"));
const Pricing = lazy(() => import("./pages/Pricing"));
const WhyUs = lazy(() => import("./pages/WhyUs"));
const Form = lazy(() => import("./pages/Form"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  const [pricingHover, setPricingHover] = useState(false);

  return (
    <div>
      {/* Suspense fallback - temporary loader */}
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Nav />

        <div id="Home">
          <Home />
        </div>

        <div id="Services">
          <Service pricingHover={pricingHover} />
        </div> 

        {/* <div id="Pricing">
          <Pricing setPricingHover={setPricingHover} />
        </div> */}

        <div id="Why Us">
          <WhyUs />
        </div>

        <OurProcess />
        <div id="About">
          <AboutUs />
        </div>
        <div id="Contact">
          <Form />
        </div>

        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
