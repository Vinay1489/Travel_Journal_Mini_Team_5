import React from "react";
import { SearchIcon } from "./Icons";

function SearchBar() {
  return (
    <div className="relative w-[260px] max-sm:hidden">
      <div className="absolute left-2.5 top-2/4 -translate-y-2/4">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search journal entries..."
        className="py-0 pr-4 pl-8 w-full h-10 text-sm bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-600"
      />
    </div>
  );
}

export default SearchBar;
