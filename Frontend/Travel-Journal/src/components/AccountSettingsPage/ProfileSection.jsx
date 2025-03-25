import React from "react";

function ProfileSection() {
  return (
    <section className="mb-6">
      <h2 className="mb-5 text-lg font-medium leading-7 text-slate-700">
        Profile
      </h2>

      <div className="mb-10">
        <label className="mb-3 text-sm font-medium leading-4 text-slate-700 block">
          Display Name
        </label>
        <div className="px-3.5 py-3 w-full h-10 text-sm bg-gray-50 rounded-2xl border border-slate-200 text-slate-700">
          John Traveler
        </div>
      </div>

      <div className="mb-10">
        <label className="mb-3 text-sm font-medium leading-4 text-slate-700 block">
          Email
        </label>
        <div className="px-3.5 py-3 w-full h-10 text-sm bg-gray-50 rounded-2xl border border-slate-200 text-slate-700">
          john@example.com
        </div>
      </div>

      <button className="mb-6 w-full h-10 text-sm font-medium bg-gray-50 rounded-2xl border border-slate-200 text-slate-700">
        View Profile
      </button>
    </section>
  );
}

export default ProfileSection;
