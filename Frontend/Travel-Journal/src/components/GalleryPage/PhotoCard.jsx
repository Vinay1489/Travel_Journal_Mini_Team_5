import React from "react";

function PhotoCard({ title, imageUrl }) {
  return (
    <article className="box-border p-px m-0 rounded-2xl border border-solid shadow-md backdrop-blur-[6px] bg-white bg-opacity-80 border-white border-opacity-30 h-[395px] w-[395px] max-md:w-full max-md:h-auto">
      <img
        src={imageUrl}
        className="box-border object-cover p-0 m-0 rounded-2xl h-[393px] w-[393px] max-md:w-full max-md:h-auto"
        alt={title}
      />
    </article>
  );
}

export default PhotoCard;
