import React from "react";
import About1 from "../assets/img/about.jpeg";

const About = () => {
  return (
    <section id="about" className="about">
      <header className="section-header">
        <h2>About</h2>
      </header>
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="content">
              <h2>MDI Platform</h2>
              <p>
                A multi tenant portal for partners and a mobile application with
                various enumerator functionalities.
              </p>
            </div>
          </div>

          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src={About1} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
