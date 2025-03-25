import React from "react";
import JourneyEntryCard from "./JourneyEntryCard";

function JourneyEntries() {
  const entries = [
    {
      location: "Mont Saint-Michel, France",
      description: "Sunrise at Mont Saint-Michel",
    },
    {
      location: "Kyoto, Japan",
      description: "Getting Lost in Kyoto",
    },
    {
      location: "Inca Trail, Peru",
      description: "Hiking the Inca Trail",
    },
    {
      location: "Bangkok, Thailand",
      description: "Floating Markets of Bangkok",
    },
    {
      location: "Reykjavik, Iceland",
      description: "Northern Lights in Iceland",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-6 max-md:grid-cols-2 max-sm:grid-cols-1">
      {entries.map((entry, index) => (
        <JourneyEntryCard
          key={index}
          location={entry.location}
          description={entry.description}
        />
      ))}
    </div>
  );
}

export default JourneyEntries;
