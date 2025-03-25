import React from "react";
import PhotoCard from "./PhotoCard";

function PhotoGrid() {
  const photos = [
    {
      id: 1,
      title: "Sunrise at Mont Saint-Michel",
      imageUrl: "https://placehold.co/393x393/e6e9f0/e6e9f0",
    },
    {
      id: 2,
      title: "Getting Lost in Kyoto",
      imageUrl: "https://placehold.co/393x393/e6e9f0/e6e9f0",
    },
    {
      id: 3,
      title: "Hiking the Inca Trail",
      imageUrl: "https://placehold.co/393x393/e6e9f0/e6e9f0",
    },
    {
      id: 4,
      title: "Floating Markets of Bangkok",
      imageUrl: "https://placehold.co/393x393/e6e9f0/e6e9f0",
    },
    {
      id: 5,
      title: "Northern Lights in Iceland",
      imageUrl: "https://placehold.co/393x393/e6e9f0/e6e9f0",
    },
  ];

  return (
    <section className="box-border grid gap-4 p-0 m-0 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          title={photo.title}
          imageUrl={photo.imageUrl}
        />
      ))}
    </section>
  );
}

export default PhotoGrid;
