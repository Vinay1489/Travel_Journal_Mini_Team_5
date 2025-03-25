"use client";
import React from "react";
import Header from "./Header";
import ProfileInfo from "./ProfileInfo";
import ProfileTabs from "./ProfileTabs";
import StatsGrid from "./StatsGrid";
import BottomNavigation from "./BottomNavigation";

function ProfilePage() {
  return (
    <div className="flex flex-col bg-[linear-gradient(0deg,#F9FAFB_0%,#F9FAFB_100%),#FFF] min-h-screen">
      <Header />
      <main className="flex flex-col items-center px-4 flex-grow">
        <div className="flex flex-col items-center mt-10 w-full max-w-[1216px]">
          <ProfileInfo />
          <div className="mt-10 w-full">
            <ProfileTabs />
            <StatsGrid />
          </div>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
}

export default ProfilePage;
