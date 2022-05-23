import React, { useState } from "react";

const Details = () => {
  const [toggleDetails, setToggleDetails] = useState(false);
  return (
    <div className="bg-primary-2 rounded-md shadow-md mt-2 py-2 px-4">
      <p
        className="text-text-1 underline cursor-pointer"
        onClick={() => {
          setToggleDetails(!toggleDetails);
        }}
      >
        More details...
      </p>
      {toggleDetails && (
        <div className="text-text-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            repudiandae?
          </p>
        </div>
      )}
    </div>
  );
};

export default Details;
