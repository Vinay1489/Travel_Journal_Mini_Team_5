import React from "react";
import { CalendarIcon, LocationIcon } from "./Icons";

function MemoryCard({
  title,
  date,
  location,
  description,
  mood,
  image,
  featured = false,
}) {
  return (
    <article className="overflow-hidden bg-white rounded-2xl border border-solid border-white border-opacity-30 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <div className="relative h-[218px]">
        <img
          src={image}
          alt={title}
          className="object-cover bg-neutral-200 size-full"
        />
        <div className="absolute top-4 right-4 px-2.5 py-0.5 text-xs font-medium rounded-full">
          {mood}
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-2.5 text-lg text-slate-700">{title}</h3>
        <div className="flex gap-4 mb-2 text-sm text-slate-600">
          <div className="flex gap-1 items-center">
            <CalendarIcon />
            <span>{date}</span>
          </div>
          <div className="flex gap-1 items-center">
            <LocationIcon />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-sm leading-snug text-slate-600">{description}</p>
      </div>
    </article>
  );
}

export default MemoryCard;
