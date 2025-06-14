import React from "react";

import { NavBar, Footer } from "@/components";
import HeroSection from "./HeroSection";
import ValueSection from "./ValueSection";

export default function Home() {
  return (
    <div className="wrapper">
      <NavBar />
      <main className="space-y-12">
        <HeroSection />
        <ValueSection />
      </main>
      <Footer />
    </div>
  );
}
