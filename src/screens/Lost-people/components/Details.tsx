import React, { useState } from "react";
import { Details as MoreDeatils } from "../../../types";

const Details: React.FC<MoreDeatils> = ({
  shirt_color,
  hair_color,
  skin_color,
  height,
  index,
  details,
}) => {
  const [toggleDetails, setToggleDetails] = useState(false);
  return (
    <div
      className="bg-primary-2 text-text-1 rounded-md shadow-md mt-2 py-2 px-4"
      style={{
        backgroundColor: index % 2 === 0 ? "#EC3642" : "",
        color: index % 2 === 0 ? "#F9F9F9" : "",
      }}
    >
      <p
        className=" underline cursor-pointer"
        onClick={() => {
          setToggleDetails(!toggleDetails);
        }}
        style={{
          color: index % 2 === 0 ? "#F9F9F9" : "",
        }}
      >
        More details...
      </p>
      {toggleDetails && (
        <div>
          <p>Shirt color: {shirt_color}</p>
          <p>Hair color: {hair_color}</p>
          <p>Skin color: {skin_color}</p>
          <p>Height: {height}cm</p>
          <p>
            <span className="font-semibold underline">Details:</span>
            {details ? ` ${details}` : " ..."}
          </p>
        </div>
      )}
    </div>
  );
};

export default Details;
