import React from "react";
import MemoryCard from "./MemoryCard";

function RecentEntriesSection() {
  const recentEntries = [
    {
      id: 1,
      title: "Sunrise at Mont Saint-Michel",
      date: "Jun 12, 2023",
      location: "Mont Saint-Michel, F…",
      description:
        "Waking up before dawn was worth it to see the golden light illuminate the abbey. The silhouette…",
      mood: "😌 peaceful",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ad555bb2d7a7e0279b6148a7958a6a8816e9d42d",
    },
    {
      id: 2,
      title: "Getting Lost in Kyoto",
      date: "Apr 15, 2023",
      location: "Kyoto, Japan",
      description:
        "I decided to wander without a map today. Found a tiny tea house tucked between cherry blossom tree…",
      mood: "🥹 nostalgic",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ad555bb2d7a7e0279b6148a7958a6a8816e9d42d",
    },
    {
      id: 3,
      title: "Hiking the Inca Trail",
      date: "Feb 28, 2023",
      location: "Inca Trail, Peru",
      description:
        "Day two of the trek and my legs are feeling it! The altitude makes every step challenging, but the view…",
      mood: "adventurous",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0d025cf49d51446cf0b8a07135e04cead8302f41",
    },
    {
      id: 4,
      title: "Floating Markets of Bangkok",
      date: "Jan 15, 2023",
      location: "Bangkok, Thailand",
      description:
        "The chaos and energy of the floating market was overwhelming in the best possible way. Colorful…",
      mood: "😲 amazed",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ad555bb2d7a7e0279b6148a7958a6a8816e9d42d",
    },
    {
      id: 5,
      title: "Northern Lights in Iceland",
      date: "Nov 20, 2022",
      location: "Reykjavik, Iceland",
      description:
        "After three nights of clouds and disappointment, the sky finally cleared. We were about to head back to…",
      mood: "😲 amazed",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ad555bb2d7a7e0279b6148a7958a6a8816e9d42d",
    },
  ];

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl text-slate-700 text-opacity-90">
        Recent Entries
      </h2>
      <div className="grid gap-6 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {recentEntries.map((entry) => (
          <MemoryCard
            key={entry.id}
            title={entry.title}
            date={entry.date}
            location={entry.location}
            description={entry.description}
            mood={entry.mood}
            image={entry.image}
            featured={false}
          />
        ))}
      </div>
    </section>
  );
}

export default RecentEntriesSection;
