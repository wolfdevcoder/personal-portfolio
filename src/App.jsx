import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OfficeProjects from "./pages/OfficeProjects";
import PracticeProjects from "./pages/PracticeProjects";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/office-projects" element={<OfficeProjects />} />
      <Route path="/practice-projects" element={<PracticeProjects />} />
    </Routes>
  );
};

export default App;
