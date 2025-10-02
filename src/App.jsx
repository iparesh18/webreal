import React, { useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Service from './pages/Service'
import Pricing from './pages/Pricing';
import WhyUs from './pages/WhyUs';
import Form from './pages/Form';
import Footer from './components/Footer';

const App = () => {
  const [pricingHover, setPricingHover] = useState(false);

  return (
    <div>
  <Nav />
  <div id="Home">
    <Home />
  </div>
  <div id="Services">
    <Service pricingHover={pricingHover} />
  </div>
  <div id="Pricing">
    <Pricing setPricingHover={setPricingHover} />
  </div>
  <div id="Why Us">
    <WhyUs />
  </div>
  <div id="Contact">
    <Form />
  </div>
  <Footer />
</div>

  )
}

export default App
