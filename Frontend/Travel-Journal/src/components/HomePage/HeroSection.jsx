import React from "react";
import ActionButton from "./ActionButton";

function HeroSection() {
  return (
    <section className="overflow-hidden relative rounded-2xl h-[521px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/765d7806e2802d238e7d36562b7e65a77e361ef1"
        alt="Travel journal hero"
        className="object-cover size-full"
      />
      <div className="absolute inset-x-0 bottom-0 h-full" />
      <div className="absolute bottom-8 left-8 text-white max-sm:p-4">
        <h2 className="mb-2.5 text-4xl max-sm:text-3xl">Your Travel Journal</h2>
        <p className="mb-5 text-base max-w-[248px] text-white text-opacity-80 max-sm:text-sm">
          Capture your adventures and memories from around the world
        </p>
        <ActionButton text="Start Writing" primary={false} />
      </div>
    </section>
  );
}

export default HeroSection;
