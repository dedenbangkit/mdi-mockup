import React from "react";
import People4 from "../assets/img/people/people-4.jpeg";

const listWorkflow = [
  "Organisation on-boarding",
  "Survey instruments setup",
  "Enumerator recruitment",
  "Rollout surveys",
  "Monitor incoming data",
  "Approval workflow",
  "Payments & Financial Report",
  "Advanced analysis",
  "Data sharing",
];

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
              <ul>
                {listWorkflow.map((x, i) => (
                  <li key={i}>
                    <i className="ri-arrow-right-circle-line"></i>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src={People4} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
