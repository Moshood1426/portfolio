import React from "react";
import Wrapper from "../assets/wrappers/ContactMe";

const ContactMe = () => {
  return (
    <Wrapper>
      <div className="contact-container">
        <span className="contact-subtitle">contact me</span>
        <h4 className="contact-title">GET IN TOUCH WITH ME, I'LL REPLY AS SOON AS POSSIBLE</h4>
        <form>
          <div className="form-item">
            <input type="text" placeholder="your name" className="form-input" />
          </div>
          <div className="form-item">
            <input type="text" placeholder="your name" className="form-input" />
          </div>
          <textarea className="form-input text-area" ></textarea>
          <button type="submit" className="btn submit-btn">Submit</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default ContactMe;
