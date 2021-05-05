import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, A11y } from "swiper";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import Client1 from "../assets/img/clients/client-1.png";
import Client2 from "../assets/img/clients/client-2.png";
import Client3 from "../assets/img/clients/client-3.png";
import Client4 from "../assets/img/clients/client-4.png";
import Client5 from "../assets/img/clients/client-5.png";
import Client6 from "../assets/img/clients/client-6.png";
import Client7 from "../assets/img/clients/client-7.png";
import Client8 from "../assets/img/clients/client-8.png";

const imageList = [
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
  Client6,
  Client7,
  Client8,
];

SwiperCore.use([Pagination, Autoplay, A11y]);

const Partners = () => {
  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Partners</h2>
        </header>
        <div className="clients-slider swiper-container">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            pagination={{ clickable: true }}
            autoplay={true}
          >
            {imageList.map((x, i) => (
              <SwiperSlide key={i}>
                <img src={x} className="img-fluid" alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
