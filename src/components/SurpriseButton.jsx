import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SurpriseButton = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="mt-10 text-center">
      <button
        onClick={() => setClicked(true)}
        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-full shadow-xl"
      >
        Surprise Me 💝
      </button>

      <AnimatePresence>
        {clicked && (
          <motion.div
            className="mt-6 text-xl text-rose-700 font-semibold"
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            animate={{ scale: 1.1, rotate: [0, 10, -10, 0], opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            🎉 You are the best thing that ever happened to me 💖
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SurpriseButton;
