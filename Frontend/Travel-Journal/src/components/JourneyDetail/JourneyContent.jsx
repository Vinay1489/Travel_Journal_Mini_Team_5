import React from "react";
import Tag from "./Tag";
import JourneyActions from "./JourneyActions";

function JourneyContent() {
  return (
    <article className="mb-12">
      <div className="relative mb-8">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/973ef56286d0ad2ab57233e00a42fce096dd03e2"
          className="object-cover w-full rounded-2xl h-[504px]"
          alt="Mont Saint-Michel"
        />
        <button className="absolute right-4 bottom-4 gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-full bg-slate-100 text-slate-700">
          Save
        </button>
      </div>

      <h2 className="mb-4 text-4xl text-slate-700 max-md:text-3xl">
        Sunrise at Mont Saint-Michel
      </h2>

      <div className="flex gap-4 items-center mb-5 max-sm:flex-wrap">
        <div className="flex gap-1.5 items-center text-sm text-slate-600">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="meta-icon"
          >
            <path
              d="M5.33337 1.33325V3.99992"
              stroke="#4D6280"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6666 1.33325V3.99992"
              stroke="#4D6280"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6667 2.66675H3.33333C2.59695 2.66675 2 3.2637 2 4.00008V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.403 2.66675 12.6667 2.66675Z"
              stroke="#4D6280"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 6.66675H14"
              stroke="#4D6280"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>June 12, 2023</span>
        </div>

        <div className="flex gap-1.5 items-center text-sm text-slate-600">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="meta-icon"
          >
            <path
              d="M13.7433 6.66659C13.7433 9.99525 10.0507 13.4619 8.81066 14.5326C8.69514 14.6194 8.55453 14.6664 8.40999 14.6664C8.26546 14.6664 8.12484 14.6194 8.00933 14.5326C6.76933 13.4619 3.07666 9.99525 3.07666 6.66659C3.07666 5.2521 3.63856 3.89554 4.63876 2.89535C5.63895 1.89516 6.99551 1.33325 8.40999 1.33325C9.82448 1.33325 11.181 1.89516 12.1812 2.89535C13.1814 3.89554 13.7433 5.2521 13.7433 6.66659Z"
              stroke="#4D6280"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.41003 8.66675C9.5146 8.66675 10.41 7.77132 10.41 6.66675C10.41 5.56218 9.5146 4.66675 8.41003 4.66675C7.30546 4.66675 6.41003 5.56218 6.41003 6.66675C6.41003 7.77132 7.30546 8.66675 8.41003 8.66675Z"
              stroke="#4D6280"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Mont Saint-Michel, France</span>
        </div>

        <Tag text="😌 peaceful" color="blue" />
      </div>

      <p className="mb-9 text-base leading-7 text-slate-700 text-opacity-90">
        Waking up before dawn was worth it to see the golden light illuminate
        the abbey. The silhouette against the morning sky is something I'll
        never forget. The tide was low, revealing the vast sandbanks that
        surround the island. Walking around the ancient walls and narrow streets
        before the crowds arrived felt like stepping back in time.
      </p>

      <JourneyActions />
    </article>
  );
}

export default JourneyContent;
