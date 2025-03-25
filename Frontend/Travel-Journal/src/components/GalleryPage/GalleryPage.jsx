"use client";
import React from "react";
import Header from "./Header";
import GalleryContent from "./GalleryContent";
import BottomNavigation from "./BottomNavigation";

function GalleryPage() {
  return (
    <div className="flex flex-col bg-[linear-gradient(0deg,#F9FAFB_0%,#F9FAFB_100%),#FFF] min-h-screen">
      <Header />
      <GalleryContent />
      <BottomNavigation />
    </div>
  );
}

export default GalleryPage;
