import React from "react";
import "./Contact.css";
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer'

export default function Contact() {
  return (
    <>
      <Header LogoHeader="/src/assets/svg/Logo_Lomotor_v2_letras_white.svg" />
      <section className="contact-us-container">
        <div className="img-container">
          <img src="/src/assets/svg/img_contact_us.svg" alt="Img contact us" />
        </div>
        <div className="contact-form-container">
          <div className="contact-form">
            <div className="name-form">
              <label htmlFor="nameInput">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="nameInput"
                id="nameInput"
              />
            </div>
            <div className="email-form">
              <label htmlFor="emailInput">Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                name="emailInput"
                id="emailInput"
              />
            </div>
            <div className="phone-form">
              <label htmlFor="phoneInput">Phone</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                name="phoneInput"
                id="phoneInput"
              />
            </div>
            <div className="country-form">
              <label htmlFor="countryInput">Country</label>
              <select
                name="countryInput"
                id="countryInput"
                placeholder="Select a country"
              >
                <option value="EEUU">EEUU</option>
                <option value="Spain">Spain</option>
                <option value="Germany">Germany</option>
                <option value="Australia">Australia</option>
                <option value="Camerun">Camerun</option>
                <option value="Bolivia">Bolivia</option>
              </select>
            </div>
            <div className="title-form">
              <label htmlFor="titleInput">Title</label>
              <input
                type="text"
                placeholder="Enter your subject"
                name="titleInput"
                id="titleInput"
              />
            </div>
            <div className="comment-form">
              <label htmlFor="commentInput">Comment</label>
              <textarea
                type="text"
                placeholder="Enter the body text"
                name="commentInput"
                id="commentInput"
                rows="8"
              ></textarea>
            </div>
          </div>
          <div className="btn">
            <button type="button"> Contact Us </button>
          </div>
        </div>
      </section>
      <div className="footer_mobile">
        <Footer/>
      </div>
    </>
  );
}
