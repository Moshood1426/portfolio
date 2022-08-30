import React from "react";
import Wrapper from "../assets/wrappers/Intro";
import introImg from "../assets/images/intro-img.jpg";

const Intro = () => {
  return (
    <Wrapper>
      {/*<div className="logo"><span>harbdoul.dev</span></div>*/}
      <div className="intro-container">
      <div className="intro-img-container">
        <img src={introImg} alt="coding-img" className="intro-img" />
      </div>
      <div className="intro-content-container">
        <span className="sub-title">Hello!! I'm Moshood Abdullahi</span>
        <h1>I'm a <span className="title">Software Developer</span></h1>
        <p className="intro-details">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries
        </p>
        <ul className="intro-actions">
          <li className="nav-item">My Projects</li>
          <li className="nav-item">Resume</li>
          <li className="nav-item">Contact Me</li>
        </ul>
      </div>
      </div>
    </Wrapper>
  );
};

export default Intro;
