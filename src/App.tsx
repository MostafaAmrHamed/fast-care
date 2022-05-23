import React from "react";
import { Routes, Route } from "react-router-dom";
import BloodBank from "./screens/Blood-bank/BloodBank";
import Home from "./screens/Home/Home";
import LostPeople from "./screens/Lost-people/LostPeople";
import Navbar from "./screens/Navbar/Navbar";
import Rooms from "./screens/Rooms/Rooms";

function App() {
  return (
    <div className="font-poppins px-2 py-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/lostPeople" element={<LostPeople />} />
        <Route path="/bloodBank" element={<BloodBank />} />
      </Routes>
    </div>
  );
}

export default App;
