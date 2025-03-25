"use client";
import React from "react";

function PhotoUploader() {
  const handleFileUpload = () => {
    // This would handle file selection
    document.getElementById("file-upload").click();
  };

  return (
    <section className="flex flex-col justify-center items-center self-stretch px-20 py-7 mt-8 text-center bg-white rounded-2xl border-2 border-dashed border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] text-slate-700 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full w-[210px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09e565f14bfcc92b40c412d998f2c74c049e167f?placeholderIfAbsent=true&apiKey=a98f7f020f4a404481c6d8b704de868b"
          className="object-contain w-8 aspect-square"
          alt="Upload icon"
        />
        <h3 className="mt-6 text-base">Add photos to your entry</h3>
        <p className="self-stretch mt-4 leading-none text-slate-600">
          Drag and drop or click to upload
        </p>
        <button
          onClick={handleFileUpload}
          className="px-5 py-3.5 mt-2.5 max-w-full leading-none bg-gray-50 rounded-2xl border border-solid border-slate-200 w-[136px]"
        >
          Choose photos
        </button>
        <input
          id="file-upload"
          type="file"
          multiple
          accept="image/*"
          className="hidden"
        />
      </div>
    </section>
  );
}

export default PhotoUploader;
