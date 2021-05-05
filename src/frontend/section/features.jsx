import React from "react";
import featureOne from "../assets/img/features.png";
import featureTwo from "../assets/img/features-2.png";
import featureThree from "../assets/img/features-3.png";

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

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>Platform Approach</p>
        </header>

        <div className="row">
          <div className="col-lg-6">
            <img
              src={featureTwo}
              className="img-fluid"
              alt=""
              style={{ marginTop: "95px" }}
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

        <div className="row feture-tabs" data-aos="fade-up">
          <div className="col-lg-6">
            <h3>
              Neque officiis dolore maiores et exercitationem quae est seda
              lidera pat claero
            </h3>

            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab1">
                <p>
                  Consequuntur inventore voluptates consequatur aut vel et. Eos
                  doloribus expedita. Sapiente atque consequatur minima nihil
                  quae aspernatur quo suscipit voluptatem.
                </p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>
                  Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                  Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                  et.
                </p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>
                  Non quod totam minus repellendus autem sint velit. Rerum
                  debitis facere soluta tenetur. Iure molestiae assumenda sunt
                  qui inventore eligendi voluptates nisi at. Dolorem quo
                  tempora. Quia et perferendis.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <img src={featureTwo} className="img-fluid" alt="" />
          </div>
        </div>

        <div className="row feature-icons" data-aos="fade-up">
          <h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>

          <div className="row">
            <div
              className="col-xl-4 text-center"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img src={featureThree} className="img-fluid p-4" alt="" />
            </div>

            <div className="col-xl-8 d-flex content">
              <div className="row align-self-center gy-4">
                <div className="col-md-6 icon-box" data-aos="fade-up">
                  <i className="ri-line-chart-line"></i>
                  <div>
                    <h4>Corporis voluptates sit</h4>
                    <p>
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i className="ri-stack-line"></i>
                  <div>
                    <h4>Ullamco laboris nisi</h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="ri-brush-4-line"></i>
                  <div>
                    <h4>Labore consequatur</h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="ri-magic-line"></i>
                  <div>
                    <h4>Beatae veritatis</h4>
                    <p>
                      Expedita veritatis consequuntur nihil tempore laudantium
                      vitae denat pacta
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="ri-command-line"></i>
                  <div>
                    <h4>Molestiae dolor</h4>
                    <p>
                      Et fuga et deserunt et enim. Dolorem architecto ratione
                      tensa raptor marte
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <i className="ri-radar-line"></i>
                  <div>
                    <h4>Explicabo consectetur</h4>
                    <p>
                      Est autem dicta beatae suscipit. Sint veritatis et sit
                      quasi ab aut inventore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
