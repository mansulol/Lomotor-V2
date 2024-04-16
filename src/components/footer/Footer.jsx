import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="social-media-container">
          <div className="logo-footer-container">
            <img src="/src/assets/svg/Logo_Lomotor_v2_logo_black.svg" alt="img logo LoMotor footer" />
          </div>
          <div className="social-media-icons-container">
            <FontAwesomeIcon className="social-media-icon" icon={faFacebook} />
            <FontAwesomeIcon className="social-media-icon" icon={faInstagram} />
            <FontAwesomeIcon className="social-media-icon" icon={faXTwitter} />
            <FontAwesomeIcon className="social-media-icon" icon={faGithub} />
          </div>
        </div>
        <div className="find-us-container">
          <h2>Find us</h2>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0885863227622!2d-103.7335295257109!3d19.234970646964495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84254fff96ee7649%3A0x4cacce25ddb8252!2sLOMOTOR!5e0!3m2!1ses!2ses!4v1712651742872!5m2!1ses!2ses"
            width="600"
            height="450"
            style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <img src="/public/images/map.png" alt="Lomotor ubication" />
          <p>123 Main Street, San Francisco, CA, 94105</p>
        </div>
        <div className="suscribe-container">
          <div className="suscribe-title">
            <p> Suscribe to get the latest news</p>
          </div>
          <div className="suscribe-input-container">
            <input
              className="input"
              type="email"
              placeholder="someone@example.com"
            />
            <div className="suscribe-btn">
              <button className="btn">Suscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <div className="license-container">
        <div className="license">
          <hr />
          <div className="policies-container">
            <div className="rights">
              <h4>@ Lomotor 2024. All rights reserved</h4>
            </div>
            <div className="policies">
              <h4>Legal notice</h4>
              <h4>Privacy Policy</h4>
              <h4>Cookie Policy</h4>
            </div>
          </div>
        </div>
        <div className="logo">
          <img src="/src/assets/svg/Logo_Lomotor_v2_logo_black.svg" alt="Logo Credit" />
        </div>
      </div>
    </>
  );
}
