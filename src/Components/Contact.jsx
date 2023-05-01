import React from "react";
import image from "../assets/contact.png";

const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-6 col-md-12 col-sm-12 form-section wow fadeInLeft">
              <p className="subheading">Looking for advertisement?</p>
              <h2 className="heading">Contact Food Blog </h2>
              <form className="contact-form" id="contact-form-data">
                <div className="row">
                  <div className="col-12" id="result"></div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Your Name"
                        required=""
                        name="userName"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email Address *"
                        required=""
                        name="userEmail"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="email@website.com"
                        required=""
                        name="userEmail"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Write your message here"
                        name="userMessage"
                        rows="6"
                        cols="45"
                      ></textarea>
                    </div>
                  </div>
                  <a
                    href=""
                    className="btn button btn-rounded green-btn btn-hvr-orange btn-orange btn-1 contact_btn"
                  >
                    Send Message
                  </a>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 img-section wow fadeInRight">
              <img src={image} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
