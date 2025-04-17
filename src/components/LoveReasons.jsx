import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoveReasons = () => {
  const [show, setShow] = useState(false);

  const reasons = [
    "You make me laugh even when I don't feel like smiling 😊",
    "You support me in everything I do 💪",
    "Your hugs are my favorite place 🫂",
    "You understand me like no one else 💬",
    "You're literally my favorite person 💖",
  ];

  return (
    <div className="text-center">
      <button
        onClick={() => setShow(!show)}
        className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-6 rounded-full transition-all shadow-md"
      >
        {show ? "Hide My Love 😶" : "Reveal My Love 💘"}
      </button>

      <AnimatePresence>
        {show && (
          <motion.ul
            className="mt-6 list-disc list-inside text-left max-w-md mx-auto space-y-3 text-lg text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {reasons.map((reason, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {reason}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoveReasons;
