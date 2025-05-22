import { useState } from "react";
import image from "../photos/WhatsApp Image 2025-05-22 at 13.14.10_3c49b6d5.jpg"

const Proposal = ({ onYes }) => {
  const [noPosition, setNoPosition] = useState({ top: "60%", left: "60%" });

  const moveNoButton = () => {
    const randTop = Math.floor(Math.random() * 70 + 10);
    const randLeft = Math.floor(Math.random() * 70 + 10);
    setNoPosition({ top: `${randTop}%`, left: `${randLeft}%` });
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center font-love">
      <h2 className="text-4xl sm:text-5xl font-bold text-rose-700 mb-6">
        Will you be mine, Mamon? 💖
      </h2>

      <img
        src={image}
        alt="Mamon"
        className="w-64 h-64 rounded-full object-cover border-4 border-rose-300 shadow-lg mb-8"
      />

      <div className="flex gap-6  w-full  h-40 justify-center font-sans">
        <button
          onClick={onYes}
          className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-all shadow-md h-1/3"
        >
          Yes 💘
        </button>

        <button
          onMouseEnter={moveNoButton}
          style={{
            position: "absolute",
            top: noPosition.top,
            left: noPosition.left,
          }}
          className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full transition-all cursor-pointer shadow"
        >
          No 😭
        </button>
      </div>
    </div>
  );
};

export default Proposal;
