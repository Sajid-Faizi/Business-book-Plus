import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Features from "../pages/Features";
import Pricing from "../pages/Pricing";
import Partner from "../pages/Partner";
import Support from "../pages/Support";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/partner" element={<Partner />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default AppRoutes;
