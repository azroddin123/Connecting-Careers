import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./Hero";
import Coursedetils from "./Coursedetils";

function App() {
  return (
    <>
      <div className="whatsapp-icon">
        <a
          href="https://wa.me/9822666114?text=Hello, I'm interested."
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/whatsapp.png" alt="WhatsApp" />
        </a>
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/allcourses" element={<Coursedetils />} />
      </Routes>
    </>
  );
}

export default App;
