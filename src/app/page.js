import AboutSection from "@/components/AboutSection";
import Achievements from "@/components/Achivemnts";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import GetInTouch from "@/components/GetInTouch";
import HealingSecrets from "@/components/HealingSecrets";
import Hero from "@/components/HeroSection";
import MyVentures from "@/components/MyVentureSection";
import Navbar from "@/components/Navbar";
import WhatIDo from "@/components/WhatIDo";
import React from "react";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MyVentures />
      <GallerySection />
      <WhatIDo />
      <HealingSecrets />
      <AboutSection />
      <Achievements />
      <GetInTouch />
      <ContactSection />

      <Footer />
    </div>
  );
}

export default Home;
