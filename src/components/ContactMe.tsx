import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/ContactMe";

const initialFormValue = {
  name: "",
  email: "",
  message: "",
};

const ContactMe = () => {
  const [formValues, setFormValues] = useState(initialFormValue);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("");

  useEffect(() => {
    if (alertMsg) {
      setTimeout(() => {
        setAlertMsg("");
        setAlertType("");
      }, 2000);
    }
  }, [alertMsg]);

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { name, email, message } = formValues;

    if (!name || !email || !message) {
      setAlertType("alert-danger");
      setAlertMsg("Kindly input a value");
      return
    }

    try {
      await fetch(
        "https://public.herotofu.com/v1/1d8cbee0-6e22-11ed-a377-655c67143cec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );
    } catch (error) {
      setAlertType("alert-danger");
      setAlertMsg(
        "Something went wrong. You can text us directly from gmail at moshood.yemi10@gmail.com"
      );
      return
    }

    setAlertType("alert-success");
    setAlertMsg("Message sent successfully");
    setFormValues(initialFormValue)
  };

  return (
    <Wrapper>
      <div className="contact-container" id="contact_me">
        <span className="contact-subtitle">contact me</span>
        <h4 className="contact-title">
          GET IN TOUCH WITH ME, I'LL REPLY AS SOON AS POSSIBLE
        </h4>
        <form onSubmit={handleSubmit}>
          {alertMsg && <p className={`alert ${alertType}`}>{alertMsg}</p>}
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
