import React from "react";
import {
  AboutMe,
  Intro,
  Projects,
  Articles,
  ContactMe,
  MoreInfo,
} from "./components";

function App() {
  return (
    <div>
      <Intro />
      <Projects />
      <div className="grid-container">
        <AboutMe />
        <Articles />
        <ContactMe />
        <MoreInfo />
      </div>
    </div>
  );
}

export default App;
