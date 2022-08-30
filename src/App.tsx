import React from "react";
import { AboutMe, Intro, Projects, Articles, ContactMe } from "./components";

function App() {
  return (
    <div>
      <Intro />
      <Projects />
      <div className="grid-container">
        <AboutMe />
        <Articles />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
