import React, { useState } from "react";
import image from "../assets/contact.png";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="row no-gutters">
            <VisibilitySensor onChange={onVisibilityChange}>
              <motion.div
                style={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="col-lg-6 col-md-12 col-sm-12 form-section wow fadeInLeft"
              >
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
              </motion.div>
            </VisibilitySensor>
            <motion.div
              style={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="col-lg-6 col-md-12 col-sm-12 img-section wow fadeInRight"
            >
              <img src={image} alt="img" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
