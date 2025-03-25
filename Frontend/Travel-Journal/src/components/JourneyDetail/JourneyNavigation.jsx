import React from "react";

function JourneyNavigation() {
  return (
    <div className="flex justify-end mb-16">
      <button className="flex gap-4 items-center px-4 py-3 text-sm font-medium rounded-2xl cursor-pointer text-slate-700">
        <span>Next Journey</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-icon"
        >
          <path
            d="M3.33337 8H12.6667"
            stroke="#344256"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 3.33325L12.6667 7.99992L8 12.6666"
            stroke="#344256"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default JourneyNavigation;
