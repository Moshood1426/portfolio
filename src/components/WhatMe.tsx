import Wrapper from "../assets/wrappers/Quizzal";
import { Link } from "react-router-dom";

const WhatMe = () => {
  return (
    <Wrapper>
      {" "}
      <Link className="back" to="/">
        {"<"} back
      </Link>
      <div className="header">
        <p className="sub-title">
          📅 2022-04-11 - ⏱️ 17 mins read - ✍️ Written by Moshood Abdullahi
        </p>
        <h2 className="title">What is it like to be me?</h2>
      </div>
      <h4>Coming soon....</h4>
    </Wrapper>
  );
};

export default WhatMe;
