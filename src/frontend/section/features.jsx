import React from "react";
import featureTwo from "../assets/img/features-2.png";
import featureThree from "../assets/img/features-3.png";
import valuesOne from "../assets/img/values-1.png";
import valuesThree from "../assets/img/values-3.png";

const platformApproach = [
  { name: "Data Providers", list: ["Collectors", "Crowd", "Satellites"] },
  {
    name: "Data Users",
    list: ["NGO’s", "Government", "Donors", "Academia", "Financial Institute"],
  },
  {
    name: "Data Services",
    list: [
      "Farmers income",
      "Data mining",
      "Third party monitoring",
      "Community plans",
      "Survey design",
    ],
  },
  {
    name: "Data Qualifiers",
    list: ["Quality check", "Data preparation", "GDPR"],
  },
];

const Feature1 = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <img
          src={valuesOne}
          className="img-fluid"
          alt=""
          style={{ marginTop: "20px" }}
        />
        <img
          src={valuesThree}
          className="img-fluid"
          alt=""
          style={{
            marginTop: "-100px",
            mixBlendMode: "darken",
            marginLeft: "95px",
          }}
        />
      </div>

      <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
        <div className="row align-self-center gy-4">
          {platformApproach.map((x, i) => (
            <div
              key={i}
              className="col-md-6"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div className="feature-box align-items-center">
                <div className="list">
                  <i className="bi bi-check"></i>
                  <h3>{x.name}</h3>
                  <ul>
                    {x.list.map((l, il) => (
                      <li key={il}>{l}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Feature2Data = [
  {
    title: "Account Registration",
    text:
      "Account creation for data collector with email verification and approval request",
    icon: "account-pin-box",
    color: "#f9597d",
  },
  {
    title: "Notification System",
    text:
      "Including job alerts, new assignment, financial report and other notification updates for enumerator",
    icon: "notification",
    color: "#f9c627",
  },
  {
    title: "Job Applications",
    text: "Search, apply for available open projects directly from mobile app",
    icon: "article",
    color: "#7556e4",
  },
  {
    title: "Survey Based Collections",
    text:
      "Digital forms which supports various type of questions including media, barcode, signature",
    icon: "survey",
    color: "#3a5deb",
  },
  {
    title: "Chat / Messaging",
    text: "Communication with organisation commissioning the data collection",
    icon: "chat-smile",
    color: "#bb0b52",
  },
  {
    title: "Payment Settings",
    text:
      "Setup, receive and view report income integrated with secure payment system",
    icon: "secure-payment",
    color: "#68c6b3",
  },
];

const Feature2 = () => {
  return (
    <div className="row feature-icons" data-aos="fade-up">
      <h3>Mobile Application</h3>
      <div className="row">
        <div className="col-xl-8 d-flex content">
          <div className="row align-self-center gy-4">
            {Feature2Data.map((x, i) => (
              <div className="col-md-6 icon-box" data-aos="fade-up">
                <i
                  className={`ri-${x.icon}-fill`}
                  style={{ color: x.color }}
                ></i>
                <div>
                  <h4>{x.title}</h4>
                  <p>{x.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="col-xl-4 text-center"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img src={featureThree} className="img-fluid p-4" alt="" />
        </div>
      </div>
    </div>
  );
};

const Feature3Data = [
  { text: "Facilitates integration of data sets", icon: "cpu" },
  { text: "Simplifies data sharing", icon: "share" },
  { text: "Stores data centrally", icon: "menu-button-wide" },
  {
    text: "Ensures that data ownership belongs to data provider",
    icon: "people",
  },
  { text: "Capture knowledge", icon: "journal-arrow-down" },
  { text: "Incentivizes data providers", icon: "cash-stack" },
  { text: "Supply data services", icon: "columns" },
  {
    text: "Youth employment in data 4 development",
    icon: "people",
  },
  {
    text: "Improve connectivities between partners/stakeholders",
    icon: "diagram-3",
  },
];

const Feature3 = () => {
  return (
    <div className="row feture-tabs" data-aos="fade-up">
      <div className="col-lg-6">
        <img src={featureTwo} className="img-fluid" alt="" />
      </div>
      <div className="col-lg-6">
        <h3>Services and Technology</h3>

        <div className="tab-content">
          <div className="tab-pane fade show active" id="tab1">
            <p>
              We are part of an ecosystem of organisations and individuals that
              are already living the data revolution and the lessons that are
              being learnt today provide valuable insights upon which future
              progress can be built.
            </p>
            {Feature3Data.map((x, i) => (
              <div key={i} className="d-flex align-items-center mb-2">
                <i className={`bi-${x.icon}`}></i>
                <h4>{x.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>Platform Approach</p>
        </header>
        <Feature1 />
        <Feature2 />
        <Feature3 />
      </div>
    </section>
  );
};
export default Features;
