import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelopeOpenText,
  FaGooglePlusG,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="no-gutters">
        <div className="container">
          <div className="row no-gutters">
            <div
              className="col-lg-6 col-md-12 col-sm-12 social-icons wow fadeInDown"
              data-wow-delay="400ms"
            >
              <ul>
                <li>
                  <a className="facebook-hover" href="">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a className="twitter-hover" href="">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a className="google-plus-hover" href="">
                    <FaGooglePlusG />
                  </a>
                </li>
                <li>
                  <a className="linked-in-hover" href="">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a className="instagram-hover" href="">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a className="gmail-hover" href="">
                    <FaEnvelopeOpenText />
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-6 col-md-12 col-sm-12 wow fadeInDown"
              data-wow-delay="400ms"
            >
              <p className="text">
                &copy; 2023, Made with Love by: Ameer Hasan
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
