import React from "react";
import List from "./components/List";

const SSN = () => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 ">
        <input
          type="text"
          className="border-2 border-primary-1 focus:outline-none rounded-md p-1"
          placeholder="SSN"
        />
        <input
          type="text"
          className="border-2 border-primary-1 focus:outline-none rounded-md p-1"
          placeholder="Full Name"
        />
        <button className="bg-primary-1 text-primary-2 text-lg px-6 py-1 rounded-md">
          Search
        </button>
      </div>
      <div className="hidden md:grid grid-cols-7 gap-5 text-primary-1 font-semibold text-center">
        <p>Name</p>
        <p>SSN</p>
        <p>Case</p>
        <p>Reason</p>
        <p>Hospital</p>
        <p>Phone</p>
        <p>Entry date</p>
      </div>
      <List />
    </div>
  );
};

export default SSN;
