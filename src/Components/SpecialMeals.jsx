import React from "react";
import image from "../assets/special-meal.png";

const SpecialMeals = () => {
  return (
    <>
      <section className="meal-section" id="SpecialMeals">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-6 col-md-12 col-sm-12 text-section order-2 order-lg-1 wow fadeInLeft">
              <h2 className="heading">Handpicked Deals</h2>
              <p className="text">
                Lorem ipsum is simply dummy text of the printing and
                typesetting. Lorem ipsum is simply dummy text of the printing
                and typesetting. Lorem Ipsum has been the industry’s standard
                dummy.
              </p>
              <p className="text">
                Lorem ipsum is simply dummy text of the printing and
                typesetting. Lorem ipsum is simply dummy text of the printing
                and typesetting. Lorem Ipsum has been the industry’s standard
                dummy.
              </p>
              <div className="center-btn">
                <a
                  className="btn button btn-rounded green-btn btn-hvr-orange btn-orange btn-1"
                  href="food-blog/standalone.html"
                >
                  Browse All Meals
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 img-section order-1 order-lg-2 wow fadeInRight">
              <img src={image} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialMeals;
