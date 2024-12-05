import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import DesignWorks from "./pages/DesignWorks";
import Contact from "./pages/Contact";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<Portfolio />} />
      <Route path="/design-works" element={<DesignWorks />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
