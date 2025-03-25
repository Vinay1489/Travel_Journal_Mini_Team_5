"use client";
import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import MemoriesSection from "./MemoriesSection";
import JourneyMapSection from "./JourneyMapSection";
import RecentEntriesSection from "./RecentEntriesSection";
import BottomNavigation from "./BottomNavigation";

function TravelJournal() {
  return (
    <main className="w-full min-h-screen">
      <Header />
      <section className="px-4 pt-16 mx-auto my-12 max-w-[1216px] max-md:px-6 max-sm:px-4">
        <HeroSection />
        <MemoriesSection />
        <JourneyMapSection />
        <RecentEntriesSection />
      </section>
      <BottomNavigation />
    </main>
  );
}

export default TravelJournal;
