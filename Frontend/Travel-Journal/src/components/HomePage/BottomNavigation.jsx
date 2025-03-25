import React from "react";
import { HomeIcon, JournalIcon, MapIcon, GalleryIcon } from "./Icons";

function BottomNavigation() {
  return (
    <nav className="flex fixed inset-x-0 bottom-0 justify-center items-center h-16 border-t border-solid backdrop-blur bg-gray-50 bg-opacity-90 border-t-slate-200 border-t-opacity-40">
      <NavItem icon={<HomeIcon active={true} />} label="Home" active={true} />
      <NavItem icon={<JournalIcon />} label="Journal" />
      <NavItem icon={<MapIcon />} label="Map" />
      <NavItem icon={<GalleryIcon />} label="Gallery" />
      <NavItem
        icon={
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd4cfe83510062f071e2ca1e3bd937375124e93"
            alt="Profile"
            className="w-7 h-7 rounded-full"
          />
        }
        label="Profile"
      />
    </nav>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <div
      className={`flex flex-col gap-1 items-center text-xs font-medium cursor-pointer w-[102px] ${
        active ? "text-blue-600" : "text-slate-600"
      }`}
    >
      <div>{icon}</div>
      <span>{label}</span>
    </div>
  );
}

export default BottomNavigation;
