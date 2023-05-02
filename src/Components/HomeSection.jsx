import React from "react";
import image from "../assets/banner.png";
import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <section className="banner-section" id="home">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-12 col-md-12 col-sm-12 img-section order-2 order-lg-1 wow fadeInLeft">
            <img src={image} alt="img" />
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 text-section order-1 order-lg-2 wow fadeInRight">
            <h2 className="heading">
              <span className="green-color">delicious</span> <br />
              food ideas.
            </h2>
            <p className="text">
              Lorem ipsum is simply dummy text of the
              <br /> printing and typesetting.
            </p>
            <div className="center-btn">
              <a
                className="btn button btn-rounded orange-btn btn-hvr-green btn-green btn-1 scroll"
                href=""
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-0"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
