import React, { useState } from "react";
import image from "../assets/banner.png";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const HomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };
  return (
    <section className="banner-section" id="home">
      <div className="container">
        <div className="row no-gutters">
          <VisibilitySensor onChange={onVisibilityChange}>
            <motion.div
              style={{ opacity: 0, x: "100%" }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : "50px",
              }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="col-lg-12 col-md-12 col-sm-12 img-section order-2 order-lg-1 wow fadeInLeft"
            >
              <img src={image} alt="img" />
            </motion.div>
          </VisibilitySensor>
          <motion.div
            style={{ opacity: 0, x: "-100%" }}
            animate={{
              opacity: isVisible ? 1 : 0,
              x: isVisible ? 0 : "-50px",
            }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="col-lg-5 col-md-12 col-sm-12 text-section order-1 order-lg-2 wow fadeInRight"
          >
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
          </motion.div>
          <div className="col-lg-7 col-0"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
