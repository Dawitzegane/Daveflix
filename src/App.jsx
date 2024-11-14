import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Daveflix from "./pages/Daveflix";
import Login from "./pages/Login";
import Player from "./pages/Player";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/" element={<Daveflix />} />
      </Routes>
    </BrowserRouter>
  );
}
