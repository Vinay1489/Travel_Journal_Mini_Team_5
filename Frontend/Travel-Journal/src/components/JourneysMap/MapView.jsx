import React from "react";

function MapView() {
  return (
    <div className="overflow-hidden w-full h-80 rounded-2xl border shadow-md backdrop-blur-[[6px]] bg-white bg-opacity-80 border-white border-opacity-30">
      <div className="relative bg-zinc-300 size-full">
        <div className="absolute top-3 left-3 z-10">
          <div className="flex flex-col rounded border-2 border-black border-opacity-20 h-[60px] w-[30px]">
            <button
              className="text-2xl font-bold bg-white rounded-sm border border-stone-300 h-[30px]"
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              className="text-2xl font-bold bg-white rounded-sm h-[30px]"
              aria-label="Zoom out"
            >
              −
            </button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 px-1.5 py-px text-xs bg-white bg-opacity-80">
          <a href="#" className="text-sky-700">
            Leaflet
          </a>
          <span>| ©</span>
          <a href="#" className="text-sky-700">
            OpenStreetMap
          </a>
          <span>contributors</span>
        </div>
      </div>
    </div>
  );
}

export default MapView;
