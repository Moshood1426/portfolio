import React from "react";
import Wrapper from "../assets/wrappers/Intro";
import introImg from "../assets/images/intro-img.jpg";
import resume from "../assets/images/resume.pdf";

const Intro = () => {
  return (
    <Wrapper>
      {/*<div className="logo"><span>harbdoul.dev</span></div>*/}
      <div className="intro-container">
        <div className="intro-img-container">
          <img src={introImg} alt="coding-img" className="intro-img" />
        </div>
        <div className="intro-content-container">
          <p className="sub-title">Hello👋 I'm Moshood Abdullahi😊</p>
          <h1>
            I'm a <span className="title">Software Developer...</span>
          </h1>
          <p className="intro-details">
            who's well-versed in databases, server configuration and user
            interface.
          </p>
          <ul className="intro-actions">
            <a className="nav-item" href="#projects">
              My Projects
            </a>
            <a
              className="nav-item"
              href={
                "https://drive.google.com/file/d/1xJ1THXBxyCUV3iF6V5eCWW-krFUe9WJm/view"
              }
              target="_blank"
              // download
              rel="noreferrer"
            >
              Resume
            </a>
            <a className="nav-item" href="#contact_me">
              Contact Me
            </a>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Intro;
