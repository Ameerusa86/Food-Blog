import React from "react";
import foodIdeasImage from "../assets/food-ideas.png";
import foodIdeasImage2 from "../assets/foodIdeas2.jpg";
import foodIdeasImage3 from "../assets/foodIdeas3.jpg";

const FoodIdeas = () => {
  return (
    <>
      <section className="main-page" id="foodideas">
        <div className="container">
          <div className="standalone-heading text-center">
            <div className="row no-gutters">
              <div
                className="col-12 col-lg-8 offset-lg-2 col-md-10 offset-md-1 wow fadeInDown"
                data-wow-delay="300ms"
              >
                <p className="subheading">Delicious Meals.</p>
                <h2 className="heading">Delicious Meals</h2>
                <p className=" text m-auto ">
                  Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                  suscipit. Vestibulum auctor nunc vitae diam eleifend, in
                  maximus metus sollicitudin. Quisque vitae sodales lectus. Nam
                  porttitor justo sed mi finibus, vel tristique risus faucibus.
                </p>
              </div>
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

            <div className="row standalone-row align-items-center no-gutters">
              <div
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
              </div>
              <div
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12 row-image hover-effect  wow fadeInRight"
                data-wow-delay="300ms"
              >
                <img src={foodIdeasImage2} alt="image" />
                <div className="standaloneoverlay overlayBottom"></div>
              </div>
            </div>

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
