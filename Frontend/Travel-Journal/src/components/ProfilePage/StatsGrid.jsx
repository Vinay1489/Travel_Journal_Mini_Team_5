import React from "react";
import StatCard from "./StatCard";

function StatsGrid() {
  const stats = [
    { value: "5", label: "Journal Entries" },
    { value: "5", label: "Countries Visited" },
    { value: "12", label: "Photos Shared" },
    { value: "855", label: "Days Journeying" },
  ];

  return (
    <section className="grid grid-cols-2 gap-4 mt-6 max-sm:grid-cols-1">
      {stats.map((stat, index) => (
        <StatCard key={index} value={stat.value} label={stat.label} />
      ))}
    </section>
  );
}

export default StatsGrid;
