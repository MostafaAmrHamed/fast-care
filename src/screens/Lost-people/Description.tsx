import React from "react";
import ListDescription from "./components/ListDescription";

const Description = () => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col md:flex-row gap-2 md:gap-5">
        <input
          type="date"
          className="border-2 border-primary-1 focus:outline-none rounded-md p-1 px-2"
          placeholder="2/3/2020"
        />
        <input
          type="text"
          className="border-2 border-primary-1 focus:outline-none rounded-md p-1"
          placeholder="Gender"
        />
        <input
          type="text"
          className="border-2 border-primary-1 focus:outline-none rounded-md p-1"
          placeholder="Hair color"
        />
        <input
          type="text"
          className="border-2 border-primary-1 focus:outline-none rounded-md p-1"
          placeholder="Skin color"
        />
        <button className="bg-primary-1 text-primary-2 text-lg px-6 py-1 rounded-md">
          Search
        </button>
      </div>
      <div className="hidden md:grid grid-cols-6 gap-5 text-primary-1 font-semibold text-center">
        <p>Gender</p>
        <p>Case</p>
        <p>Reason</p>
        <p>Hospital</p>
        <p>Phone</p>
        <p>Entry date</p>
      </div>
      <ListDescription />
    </div>
  );
};

export default Description;
