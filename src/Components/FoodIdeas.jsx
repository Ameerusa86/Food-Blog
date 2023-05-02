import React, { useState } from "react";
import foodIdeasImage from "../assets/food-ideas.png";
import foodIdeasImage2 from "../assets/foodIdeas2.jpg";
import foodIdeasImage3 from "../assets/foodIdeas3.jpg";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const FoodIdeas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };
  return (
    <>
      <section className="main-page" id="foodideas">
        <div className="container">
          <div className="standalone-heading text-center">
            <div className="row no-gutters">
              <VisibilitySensor onChange={onVisibilityChange}>
                <div
                  className="col-12 col-lg-8 offset-lg-2 col-md-10 offset-md-1 wow fadeInDown"
                  data-wow-delay="300ms"
                >
                  <p className="subheading">Delicious Meals.</p>
                  <h2 className="heading">Delicious Meals</h2>
                  <p className=" text m-auto ">
                    Curabitur mollis bibendum luctus. Duis suscipit vitae dui
                    sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in
                    maximus metus sollicitudin. Quisque vitae sodales lectus.
                    Nam porttitor justo sed mi finibus, vel tristique risus
                    faucibus.
                  </p>
                </div>
              </VisibilitySensor>
            </div>
          </div>
          <div className="standalone-area">
            <div className="row standalone-row align-items-center no-gutters">
              <div
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12 row-image hover-effect order-2 order-lg-1 wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <img src={foodIdeasImage} alt="image" />
                <div className="standaloneoverlay overlayBottom"></div>
              </div>
              <div
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12 row-text order-1 order-lg-2 wow fadeInRight "
                data-wow-delay="300ms"
              >
                <p className="subheading">Delicious Meals.</p>
                <h2 className="heading">Delicious Meals.</h2>
                <p className=" text m-auto ">
                  Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                  suscipit. Vestibulum auctor nunc vitae diam eleifend, in
                  maximus metus sollicitudin.
                </p>
              </div>
            </div>

            <motion.div
              style={{ opacity: 0 }}
              animate={{
                opacity: isVisible ? 1 : 0,
              }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="row standalone-row align-items-center no-gutters"
            >
              <motion.div
                style={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12 row-text wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <p className="subheading">Delicious Meals.</p>
                <h2 className="heading">Delicious Meals.</h2>
                <p className="text m-auto ">
                  Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                  suscipit. Vestibulum auctor nunc vitae diam eleifend, in
                  maximus metus sollicitudin.
                </p>
              </motion.div>
              <div
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12 row-image hover-effect  wow fadeInRight"
                data-wow-delay="300ms"
              >
                <img src={foodIdeasImage2} alt="image" />
                <div className="standaloneoverlay overlayBottom"></div>
              </div>
            </motion.div>

            <div className="row standalone-row align-items-center no-gutters">
              <div
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12 row-image hover-effect order-2 order-lg-1 wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <img src={foodIdeasImage3} alt="image" />
                <div className="standaloneoverlay overlayBottom"></div>
              </div>
              <div
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12 row-text order-1 order-lg-2 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <p className="subheading">Delicious Meals.</p>
                <h2 className="heading">Delicious Meals.</h2>
                <p className="text m-auto ">
                  Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                  suscipit. Vestibulum auctor nunc vitae diam eleifend, in
                  maximus metus sollicitudin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodIdeas;
