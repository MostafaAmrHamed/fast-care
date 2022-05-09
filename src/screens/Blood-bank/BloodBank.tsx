import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
const BloodBank = () => {
  const [bloodType, setBloodType] = useState("");
  return (
    <div className="container mx-auto mt-5">
      <div className="flex flex-col md:flex-row gap-5 mx-2 md:mx-0 w-fit">
        <button
          className="bg-primary-1 text-base md:text-lg px-4 py-2 text-primary-2 flex items-center gap-2 rounded-lg"
          onClick={() => {
            console.log(bloodType);
          }}
        >
          Get your current location
          <HiLocationMarker size={30} />
        </button>
        <select
          value={bloodType}
          onChange={(e) => {
            setBloodType(e.target.value);
          }}
          className="border-2 border-primary-1 px-4 text-lg rounded-md"
        >
          <option value="">Bood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>
      <div className="text-center text-5xl font-bold flex justify-center items-center h-[300px] md:h-[400px] leading-normal">
        <h1>
          <span className="text-red-700">1</span> pint
          <br /> can save <br />
          <span className="text-red-700"> 3</span> lives
        </h1>
      </div>
    </div>
  );
};

export default BloodBank;
