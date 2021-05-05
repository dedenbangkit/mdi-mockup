import React from "react";
import AOS from "aos";
import "./style.css";

import Header from "./modules/header";
import Footer from "./modules/footer";
import Home from "./section/home";
import About from "./section/about";
import Features from "./section/features";
import Partners from "./section/partners";

const Landing = () => {
  AOS.init();
  return (
    <>
      <Header />
      <Home />
      <main id="main">
        <About />
        <Features />
        <Partners />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
