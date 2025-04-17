import React from "react";
import LoveReasons from "./components/LoveReasons";
import SurpriseButton from "./components/SurpriseButton";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4 bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300">
      <h1 className="text-4xl font-bold text-rose-700 mb-10 drop-shadow-lg">Hi Babe 💌</h1>
      <LoveReasons />
      <SurpriseButton />
    </div>
  );
}

export default App;
