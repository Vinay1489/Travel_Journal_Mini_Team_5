"use client";
import * as React from "react";
import Header from "./Header";
import FilterControls from "./FilterControls";
import MapView from "./MapView";
import JourneyEntries from "./JourneyEntries";
import BottomNavigation from "./BottomNavigation";

function JourneyMap() {
  return (
    <main className="flex flex-col bg-[linear-gradient(0deg,#F9FAFB_0%,#F9FAFB_100%),#FFF] min-h-[screen]">
      <Header />
      <section className="flex flex-col px-64 py-10 max-md:px-10 max-sm:px-5">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-medium leading-9 text-slate-700 text-opacity-90">
            Your Journey
          </h1>
          <FilterControls />
        </div>
        <MapView />
        <JourneyEntries />
      </section>
      <BottomNavigation />
    </main>
  );
}

export default JourneyMap;
