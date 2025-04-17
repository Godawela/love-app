import React, { useState } from "react";

const SurpriseButton = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="mt-8 text-center">
      <button
        onClick={() => setClicked(true)}
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
      >
        Click Me for a Surprise 💝
      </button>
      {clicked && (
        <div className="mt-4 animate-pulse text-lg text-rose-600">
          🎉 Surprise! You are the best thing that ever happened to me 💖
        </div>
      )}
    </div>
  );
};

export default SurpriseButton;
