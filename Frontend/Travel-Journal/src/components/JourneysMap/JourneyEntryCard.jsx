import React from "react";

function JourneyEntryCard({ location, description }) {
  return (
    <article className="flex flex-col p-4 bg-white rounded-2xl border shadow-sm border-slate-200">
      <h3 className="mb-1 text-base font-medium text-slate-700">{location}</h3>
      <p className="mb-3 text-sm text-slate-600">{description}</p>
      <a href="#" className="text-sm text-blue-600">
        View entry
      </a>
    </article>
  );
}

export default JourneyEntryCard;
