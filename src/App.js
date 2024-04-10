// App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
