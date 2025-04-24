import React from "react";
import HeroSection from "../../Components/Home/HeroSection";
import CounterSection from "../../Components/Home/CounterSection";
import BannerSection from "../../Components/Home/BannerSection";
import ServicesSection from "../../Components/Home/ServicesSection";
import SoftwareweUse from "../../Components/Home/SoftwareweUse";
import BeginSection from "../../Components/Home/BeginSection";
import PlanSection from "../../Components/Home/PlanSection";

const Home = () => {
  return (
    <div>
      <div>
        <div className="home-container">
          <HeroSection />
          <CounterSection />
          <BannerSection />
          <ServicesSection />
          <SoftwareweUse />
          <BeginSection />
          <PlanSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
