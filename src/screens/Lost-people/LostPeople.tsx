import React, { useState } from "react";

const LostPeople = () => {
  const [ssn, setSnn] = useState(true);
  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-center w-full">
        <div className="flex gap-10 pb-1 px-3 border-b-[3px] border-primary-1 text-lg font-semibold text-text-2 cursor-default">
          <p
            className="hover:text-primary-1"
            style={{ color: ssn ? "#EC3642" : "" }}
            onClick={() => {
              setSnn(true);
            }}
          >
            SSN / Name
          </p>
          <p
            className="hover:text-primary-1"
            style={{ color: ssn ? "" : "#EC3642" }}
            onClick={() => {
              setSnn(false);
            }}
          >
            Description
          </p>
        </div>
      </div>
    </div>
  );
};

export default LostPeople;
