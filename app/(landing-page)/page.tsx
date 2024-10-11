import React from "react";
import Navbar from "@/components/navbar/navbar";
import HeroSection from "./hero-section";
import Section from "./sections";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection></HeroSection>
      <Section></Section>
    </div>
  );
};

export default LandingPage;
