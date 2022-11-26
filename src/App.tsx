import Landing from "./pages/Landing";
import WhatMe from "./components/WhatMe";
import Quizzal from "./components/Quizzal";
import Architecture from "./components/Architecture";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/the-quizzal-project" element={<Quizzal />} />
        <Route path="/what-is-it-like-to-be-me" element={<WhatMe />} />
        <Route
          path="/architecture-to-software-dev"
          element={<Architecture />}
        />
        <Route path="/*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
