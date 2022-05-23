import React from "react";
import { RoomsLocation } from "../../../types";

const List: React.FC<RoomsLocation> = ({
  hospital_name,
  hospital_phone,
  id,
}) => {
  return (
    <div
      className="md:grid md:grid-cols-2 gap-2 text-center text-base text-text-1 bg-primary-2 p-3 rounded-md shadow-md cursor-default"
      style={{
        backgroundColor: id % 2 === 0 ? "" : "#EC3642",
        color: id % 2 === 0 ? "" : "#F9F9F9",
      }}
      key={id}
    >
      <h1 className="">{hospital_name}</h1>
      <h1 className="">{hospital_phone}</h1>
    </div>
  );
};

export default List;
