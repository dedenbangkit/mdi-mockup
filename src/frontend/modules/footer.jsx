import React from "react";
import logo from "../assets/img/logo/logo-mdi-02.png";

const linkSocial = [
  {
    url: "https://github.com/akvo",
    icon: "github",
  },
  {
    url: "https://twitter.com/akvo",
    icon: "twitter",
  },
  {
    url: "https://www.linkedin.com/company/akvo/",
    icon: "linkedin",
  },
  {
    url: "http://www.facebook.com/1Akvo",
    icon: "facebook",
  },
];

const linkUseful = [
  {
    label: "Data Journey",
    url: "https://datajourney.akvo.org/blog",
  },
  {
    label: "Knowledge Library",
    url: "https://akvo.org/knowledge-library/",
  },
  {
    label: "Newsletter",
    url: "https://akvo.org/data-journey-newsletter/",
  },
  {
    label: "Stories",
    url: "https://akvo.org/stories/",
  },
];

const linkServices = [
  {
    label: "Data Portal",
    url: "https://akvo.org/contact-us/get-in-touch",
  },
  {
    label: "Mobile Apps",
    url: "https://akvo.org/contact-us/get-in-touch",
  },
  {
    label: "Automation / Jobs",
    url: "https://akvo.org/contact-us/get-in-touch",
  },
  {
    label: "Data Analysis",
    url: "https://akvo.org/contact-us/get-in-touch",
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <img src={logo} alt="" />
              </a>
              <p>
                We apply the principles of open source software, open content
                and open data to all of our work. Find out{" "}
                <a
                  href="https://akvo.org/blog/open-data-content-and-software-at-akvo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  why and how
                </a>
                .
              </p>
              <div className="social-links mt-3">
                {linkSocial.map((x, i) => (
                  <a
                    key={x.icon}
                    href={x.url}
                    className={x.icon}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={`bi bi-${x.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Links</h4>
              <ul>
                {linkUseful.map((x, i) => (
                  <li key={i}>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a target="_blank" rel="noreferrer" href={x.url}>
                      {x.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                {linkServices.map((x, i) => (
                  <li key={i}>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a target="_blank" rel="noreferrer" href={x.url}>
                      {x.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Get in Touch</h4>
              <p>
                Akvo Bamako <br />
                Rue 17 -Porte 305
                <br />
                Badalabougou Est BP 2220
                <br />
                Bamako Mali
                <br />
                <br />
                <strong>Email:</strong> info@akvo.org
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="credits">
          Designed by <a href="https://akvo.org/">Akvo</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
