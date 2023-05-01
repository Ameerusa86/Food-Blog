import React from "react";
import image from "../assets/adervisement.png";

const Advertise = () => {
  return (
    <>
      <section className="advertisemnet-Section" id="Advertise">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-6 col-md-12 col-sm-12 img-section wow fadeInLeft">
              <img src={image} alt="img" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-section wow fadeInRight">
              <h2 className="heading">Are You Hungry?</h2>
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
                  className="btn button btn-rounded orange-btn btn-hvr-green btn-green btn-1"
                  href="food-blog/standalone.html"
                >
                  Browse All Meals
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advertise;
