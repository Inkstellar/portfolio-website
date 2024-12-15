import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import DesignWorks from "./pages/DesignWorks";
import Contact from "./pages/Contact";
import PrintPortfolio from "./pages/PrintPortfolio";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<Portfolio />} />
      <Route path="/design-works" element={<DesignWorks />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/print" element={<PrintPortfolio />} />
    </Routes>
  );
};

export default AppRoutes;
