import React from "react";
import Dashboard from "../layout/Dashboard";
import HeroSection from "../components/dashboard/HeroSection";
import CategoriesSection from "../components/dashboard/CategoriesSection";
import ScenarioPreview from "../components/dashboard/ScenarioPreview";
import VrHud from "../components/dashboard/VrHud";
import ExposureFeedback from "../components/dashboard/ExposureFeedback";

const DashboardPage = () => {
  return (
    <Dashboard>
      <HeroSection />
      <ScenarioPreview />
      <CategoriesSection />
      <VrHud />
      <ExposureFeedback />
    </Dashboard>
  );
};

export default DashboardPage;
