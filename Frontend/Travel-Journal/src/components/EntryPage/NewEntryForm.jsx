"use client";
import React from "react";
import MoodSelector from "./MoodSelector";
import PhotoUploader from "./PhotoUploader";

function NewEntryForm() {
  return (
    <main className="flex flex-col items-start self-center mt-14 max-w-full text-sm w-[768px] max-md:mt-10">
      <FormField
        label="Title"
        inputElement={
          <input
            type="text"
            placeholder="Name this memory..."
            className="overflow-hidden self-stretch w-full px-3.5 py-3.5 mt-3 bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-600 max-md:pr-5 max-md:max-w-full"
          />
        }
      />

      <FormField
        label="Location"
        inputElement={
          <div className="flex overflow-hidden flex-wrap gap-2.5 self-stretch px-3 py-2.5 mt-3 bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-600">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3669add6f9e929f669bbd5282de9f2cea970d461?placeholderIfAbsent=true&apiKey=a98f7f020f4a404481c6d8b704de868b"
              className="object-contain shrink-0 w-5 aspect-square"
              alt="Location icon"
            />
            <input
              type="text"
              placeholder="Where were you?"
              className="flex-auto w-[711px] max-md:max-w-full bg-transparent border-none outline-none"
            />
          </div>
        }
      />

      <FormField
        label="Your story"
        inputElement={
          <textarea
            placeholder="Write about your experience..."
            className="overflow-hidden self-stretch w-full px-3.5 pt-3.5 pb-36 mt-2.5 leading-none bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-600 max-md:pr-5 max-md:pb-28 max-md:max-w-full"
          />
        }
      />

      <FormField label="How did you feel?" inputElement={<MoodSelector />} />

      <PhotoUploader />

      <div className="flex gap-3 self-end mt-12 leading-none text-center max-md:mt-10">
        <button className="px-5 py-4 whitespace-nowrap bg-gray-50 rounded-2xl border border-solid border-slate-200 text-slate-700">
          Discard
        </button>
        <button className="px-4 py-3.5 bg-blue-600 rounded-2xl text-slate-50">
          Save Entry
        </button>
      </div>
    </main>
  );
}

function FormField({ label, inputElement }) {
  return (
    <div className="w-full mb-6">
      <label className="text-base text-slate-700">{label}</label>
      {inputElement}
    </div>
  );
}

export default NewEntryForm;
