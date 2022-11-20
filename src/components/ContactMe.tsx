import React, { useState } from "react";
import Wrapper from "../assets/wrappers/ContactMe";

const initialFormValue = {
  name: "",
  email: "",
  message: "",
};

const ContactMe = () => {
  const [formValues, setFormValues] = useState(initialFormValue);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  return (
    <Wrapper>
      <div className="contact-container">
        <span className="contact-subtitle">contact me</span>
        <h4 className="contact-title">
          GET IN TOUCH WITH ME, I'LL REPLY AS SOON AS POSSIBLE
        </h4>
        <form>
          <div className="form-item">
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="form-input"
              onChange={(event) => handleChange(event)}
              value={formValues.email}
            />
          </div>
          <div className="form-item">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="form-input"
              onChange={(event) => handleChange(event)}
              value={formValues.name}
            />
          </div>
          <textarea
            name="message"
            className="form-input text-area"
            placeholder="Enter a message"
            onChange={handleChange}
            value={formValues.message}
          ></textarea>
          <button type="submit" className="btn submit-btn">
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default ContactMe;
