/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ShelfCatalog } from './components/ShelfCatalog';
import { SubscriptionCards } from './components/SubscriptionCards';
import { LicenseVerifier } from './components/LicenseVerifier';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { CtaBand } from './components/CtaBand';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[#FFFDF8] dark:bg-[#0C0A15] text-[#19162E] dark:text-[#F8F7FC] transition-colors duration-200 selection:bg-[#FF5A43]/20 selection:text-[#FF5A43]">
        {/* Responsive Navbar with Dark Mode Toggle */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section with Official Seal & Verification Graphic */}
          <Hero />

          {/* Trust Strip */}
          <TrustStrip />

          {/* Curated Shelf / Catalog with instant client-side search & category filtering */}
          <ShelfCatalog />

          {/* Popular Subscriptions (Netflix, Canva, CapCut, Gemini, Spotify, etc.) */}
          <SubscriptionCards />

          {/* Interactive License Authenticity Verification Tool */}
          <LicenseVerifier />

          {/* How Sourcing Works */}
          <HowItWorks />

          {/* Dual-Language Testimonials (English & Arabic RTL) */}
          <Testimonials />

          {/* FAQ Section */}
          <FaqSection />

          {/* Call to Action Band */}
          <CtaBand />
        </main>

        {/* Responsive Footer */}
        <Footer />

        {/* Persistent Floating WhatsApp Quick-Chat Desk */}
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}
