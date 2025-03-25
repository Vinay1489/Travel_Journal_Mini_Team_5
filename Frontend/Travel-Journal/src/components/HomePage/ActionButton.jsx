import React from "react";

function ActionButton({ text, primary = false, onClick }) {
  const baseClasses =
    "px-4 py-3 text-sm font-medium rounded-2xl cursor-pointer border-[none]";
  const primaryClasses = "bg-blue-600 text-slate-50";
  const secondaryClasses = "text-black bg-white";

  const buttonClasses = `${baseClasses} ${
    primary ? primaryClasses : secondaryClasses
  }`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
}

export default ActionButton;
