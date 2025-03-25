"use client";
import React from "react";
import JourneyHeader from "./JourneyHeader";
import JourneyNavigation from "./JourneyNavigation";
import JourneyTabs from "./JourneyTabs";
import JourneyContent from "./JourneyContent";
import JourneyCallToAction from "./JourneyCallToAction";
import BottomNavigation from "./BottomNavigation";

function JourneyDetails() {
  return (
    <div className="flex flex-col min-h-screen">
      <JourneyHeader />
      <main className="px-4 py-12 mx-auto my-0 max-w-4xl max-md:px-4 max-md:py-8 max-sm:px-3 max-sm:py-6">
        <JourneyNavigation />
        <JourneyTabs />
        <JourneyContent />
        <hr className="mx-0 my-12 h-px bg-slate-200" />
        <JourneyCallToAction />
      </main>
      <BottomNavigation />
    </div>
  );
}

export default JourneyDetails;
