import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import "./App.css";

function App() {
  const [showReasons, setShowReasons] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);

  const reasons = [
    "You're my favorite notification 💌",
    "You make even boring days feel magical ✨",
    "You're my peace in chaos 🫶",
    "You always believe in me 🥹",
    "You are my forever person 💖",
  ];

  const handleSurprise = () => {
    setShowSurprise(true);
    confetti({
      particleCount: 200,
      spread: 180,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="app-container">
      <motion.div
        className="love-card"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="title">Hi Babe 💗</h1>

        <div className="buttons">
          <button onClick={() => setShowReasons(!showReasons)} className="btn love">
            {showReasons ? "Hide 💬" : "Why I Love You 💖"}
          </button>
          <button onClick={handleSurprise} className="btn surprise">
            Surprise Me 🎁
          </button>
        </div>
        <div className="gift-box-container">
  <motion.div
    className={`gift-box ${giftOpened ? "open" : ""}`}
    onClick={() => setGiftOpened(true)}
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    🎁
  </motion.div>

  {giftOpened && (
    <motion.div
      className="gift-message"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      🌟 You’re the most special gift of my life 💝
    </motion.div>
  )}
</div>

        <AnimatePresence>
          {showReasons && (
            <motion.ul
              className="reasons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  ❤️ {reason}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSurprise && (
            <motion.div
              className="surprise-text"
              initial={{ scale: 0 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              💘 I Love You More Than Words Can Ever Explain 💘
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="floating-hearts">
  {Array.from({ length: 15 }).map((_, i) => (
    <span key={i} className="heart" style={{ "--i": Math.random() }} >💖</span>

  ))}
</div>

    </div>
  );
}

export default App;
