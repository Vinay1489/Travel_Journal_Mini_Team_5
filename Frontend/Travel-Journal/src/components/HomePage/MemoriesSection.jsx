import React from "react";
import MemoryCard from "./MemoryCard";

function MemoriesSection() {
  const featuredMemories = [
    {
      id: 1,
      title: "Sunrise at Mont Saint-Michel",
      date: "Jun 12, 2023",
      location: "Mont Saint-Michel, F…",
      description:
        "Waking up before dawn was worth it to see the golden light illuminate the abbey. The silhouette against the morning sky is something I'll never forget. The tide was low,…",
      mood: "😌 peaceful",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ad555bb2d7a7e0279b6148a7958a6a8816e9d42d",
    },
    {
      id: 2,
      title: "Northern Lights in Iceland",
      date: "Nov 20, 2022",
      location: "Reykjavik, Iceland",
      description:
        "After three nights of clouds and disappointment, the sky finally cleared. We were about to head back to the hotel when the first green streaks appeared. Within…",
      mood: "😲 amazed",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ad555bb2d7a7e0279b6148a7958a6a8816e9d42d",
    },
  ];

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl text-slate-700 text-opacity-90">
        Featured Memories
      </h2>
      <div className="grid gap-6 grid-cols-[repeat(2,1fr)] max-md:grid-cols-[1fr]">
        {featuredMemories.map((memory) => (
          <MemoryCard
            key={memory.id}
            title={memory.title}
            date={memory.date}
            location={memory.location}
            description={memory.description}
            mood={memory.mood}
            image={memory.image}
            featured={true}
          />
        ))}
      </div>
    </section>
  );
}

export default MemoriesSection;
