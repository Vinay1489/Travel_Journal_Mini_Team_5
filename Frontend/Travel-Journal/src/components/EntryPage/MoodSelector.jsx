import React from "react";

function MoodSelector() {
  const moodOptions = [
    { emoji: "😊", text: "happy" },
    { emoji: "🤩", text: "excited" },
    { emoji: "🥹", text: "nostalgic" },
    { emoji: "😌", text: "peaceful" },
    { text: "adventurous" },
    { emoji: "😲", text: "amazed" },
    { emoji: "😴", text: "tired" },
    { emoji: "🤔", text: "reflective" },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mt-3 max-w-full leading-none text-center whitespace-nowrap text-slate-700 w-[727px]">
        {moodOptions.slice(0, 6).map((mood, index) => (
          <MoodButton key={index} emoji={mood.emoji} text={mood.text} />
        ))}
      </div>
      <div className="flex gap-2 mt-2 leading-none text-center whitespace-nowrap text-slate-700">
        {moodOptions.slice(6).map((mood, index) => (
          <MoodButton key={index} emoji={mood.emoji} text={mood.text} />
        ))}
      </div>
    </div>
  );
}

function MoodButton({ emoji, text }) {
  return (
    <button
      className={`flex gap-${emoji ? "2.5" : "0"} ${
        emoji ? "p-3.5" : "px-12 py-4"
      } bg-gray-50 rounded-2xl border border-solid border-slate-200 max-md:${
        !emoji ? "pl-5" : ""
      }`}
    >
      {emoji && <span>{emoji}</span>}
      <span className={emoji ? "my-auto" : ""}>{text}</span>
    </button>
  );
}

export default MoodSelector;
