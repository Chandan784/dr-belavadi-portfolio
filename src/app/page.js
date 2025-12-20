import AboutSection from "@/components/AboutSection";
import Achievements from "@/components/Achivemnts";
import ContactSection from "@/components/ContactSection";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import GetInTouch from "@/components/GetInTouch";
import HealingSecrets from "@/components/HealingSecrets";
import Hero from "@/components/HeroSection";
import MyProducts from "@/components/MyProduct";
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
      <MyProducts />
      <HealingSecrets />
      <AboutSection />
      <Education />
      <Experience />
      <Achievements />
      <GetInTouch />
      <ContactSection />

      <Footer />
    </div>
  );
}

export default Home;
