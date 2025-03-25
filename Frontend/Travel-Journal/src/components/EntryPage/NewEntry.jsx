"use client";
import * as React from "react";
import NewEntryHeader from "./NewEntryHeader";
import NewEntryForm from "./NewEntryForm";
import BottomNavigation from "./BottomNavigation";

function NewEntry() {
  return (
    <div className="flex flex-col font-medium bg-white">
      <NewEntryHeader />
      <NewEntryForm />
      <BottomNavigation />
    </div>
  );
}

export default NewEntry;
