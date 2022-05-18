import React from "react";
import LostPeople from "./screens/Lost-people/LostPeople";
import Navbar from "./screens/Navbar/Navbar";

function App() {
  return (
    <div className="font-poppins px-2">
      <Navbar />
      <LostPeople />
    </div>
  );
}

export default App;
