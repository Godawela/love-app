import React from "react";

const LoveReasons = () => {
  const reasons = [
    "You make me laugh even when I don't feel like smiling 😊",
    "You support me in everything I do 💪",
    "Your hugs are my favorite place 🫂",
    "You understand me like no one else 💬",
    "You're literally my favorite person 💖",
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Reasons I Love You 💘</h2>
      <ul className="list-disc pl-5 space-y-2">
        {reasons.map((reason, index) => (
          <li key={index} className="text-lg text-gray-700">{reason}</li>
        ))}
      </ul>
    </div>
  );
};

export default LoveReasons;
