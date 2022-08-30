import React from "react";
import Wrapper from "../assets/wrappers/ContactMe";

const ContactMe = () => {
  return (
    <Wrapper>
      <div className="contact-container">
        <span>contact me</span>
        <h4>GET IN TOUCH WITH ME, I'LL REPLY AS SOON AS POSSIBLE</h4>
        <form>
          <div>
            <input type="text" placeholder="your name" />
          </div>
          <div>
            <input type="text" placeholder="your name" />
          </div>
          <textarea></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default ContactMe;
