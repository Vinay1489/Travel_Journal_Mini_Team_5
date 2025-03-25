import React from "react";

function JourneyMapSection() {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl text-slate-700 text-opacity-90">
        Your Journey
      </h2>
      <div className="relative h-80 rounded-2xl border border-solid bg-zinc-300 border-white border-opacity-30">
        <div className="flex absolute top-3 left-3 flex-col bg-white rounded border-2 border-solid border-black border-opacity-20">
          <button className="text-2xl font-bold text-black bg-white cursor-pointer border-[none] h-[30px] w-[30px]">
            +
          </button>
          <button className="text-2xl font-bold text-black bg-white cursor-pointer border-[none] h-[30px] w-[30px]">
            −
          </button>
        </div>
        <div className="absolute right-0 bottom-0 px-1.5 py-0 text-xs bg-white bg-opacity-80">
          Leaflet | © OpenStreetMap contributors
        </div>
      </div>
    </section>
  );
}

export default JourneyMapSection;
