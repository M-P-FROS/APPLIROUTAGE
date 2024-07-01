import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Clock from "./components/Clock";
import Contact from "./components/Contact";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/horloge" element={<Clock />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
