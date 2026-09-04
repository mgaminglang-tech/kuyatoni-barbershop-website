import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { TrendingCuts } from './components/TrendingCuts';
import { BarberProfile } from './components/BarberProfile';
import { VisitUs } from './components/VisitUs';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#111111] text-[#F7F7F7] font-body selection:bg-[#B8925E]/30 selection:text-[#E9E1D3]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Page Layout */}
      <main id="main-content" className="w-full max-w-full overflow-x-hidden">
        {/* Section 2: Hero */}
        <Hero />

        {/* Section 3: About Kuya Toni Barber House */}
        <About />

        {/* Section 4: Services Grid */}
        <Services />

        {/* Section 5: Trending Cuts Grid */}
        <TrendingCuts />

        {/* Section 6: Meet Your Barber */}
        <BarberProfile />

        {/* Section 7: Visit Us & Opening Hours */}
        <VisitUs />

        {/* Section 8: Final CTA */}
        <FinalCTA />
      </main>

      {/* Section 9: Footer */}
      <Footer />
    </div>
  );
}
