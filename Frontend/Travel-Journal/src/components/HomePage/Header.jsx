"use client";
import React from "react";
import SearchBar from "./SearchBar";
import ActionButton from "./ActionButton";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 border-b border-solid backdrop-blur bg-gray-50 bg-opacity-80 border-b-slate-200 border-b-opacity-40 h-[65px] z-[100]">
      <div className="flex justify-between items-center px-4 py-3 mx-auto my-0 max-w-[1400px] max-sm:p-3">
        <h1 className="text-xl text-slate-700">Wanderlust</h1>
        <SearchBar />
        <ActionButton text="New Entry" primary={true}  />
      </div>
    </header>
  );
}

export default Header;
