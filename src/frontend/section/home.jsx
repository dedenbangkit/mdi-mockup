import React, { useEffect, useState } from "react";
import MapChart from "../modules/maps";
import Counts from "../modules/counts";

const Home = () => {
  const [data, setData] = useState([]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      fetch("/json/mali-project.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [data]);
  useEffect(() => {
    if (markers.length === 0) {
      fetch("/json/example-points.json")
        .then((res) => res.json())
        .then((data) => setMarkers(data));
    }
  }, [markers]);

  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">Mali DEX</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              Access reliable data trought a network of{" "}
              <b>local field agents</b>
            </h2>
          </div>
          <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="200">
            <MapChart projects={data} markers={markers} />
          </div>
        </div>
        <Counts />
      </div>
    </section>
  );
};

export default Home;
