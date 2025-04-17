import React from "react";
import LoveReasons from "./components/LoveReasons";
import SurpriseButton from "./components/SurpriseButton";
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-100 to-pink-200">
      <h1 className="text-4xl font-bold text-rose-700 mt-10">Hi Babe 💌</h1>
      <LoveReasons />
      <SurpriseButton />
    </div>
  );
}

export default App;
