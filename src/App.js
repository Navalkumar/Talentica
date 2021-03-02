import React from 'react';
import './App.scss';
import Navbar from './contents/Navbar';
import Home from './contents/Home';
import Benefits from './contents/Benefits';
import Facilities from './contents/Facilities';
import Gallery from './contents/Gallery';
import Pricing from './contents/Pricing';
import Contact from "./contents/Contact";
import Footer from "./contents/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Benefits />
      <Facilities />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
