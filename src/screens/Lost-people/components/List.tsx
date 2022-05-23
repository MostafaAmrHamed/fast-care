import React from "react";
import { LostSSN } from "../../../types";

const List: React.FC<LostSSN> = ({
  date_of_lost,
  gender,
  hospital_name,
  hospital_phone,
  id,
  name,
  national_id,
  reason,
  status,
}) => {
  return (
    <div
      className="md:grid md:grid-cols-7 md:items-center md:gap-5 text-center text-base text-text-1 bg-primary-2 py-4 rounded-md shadow-md cursor-default"
      style={{
        backgroundColor: id % 2 === 0 ? "" : "#EC3642",
        color: id % 2 === 0 ? "" : "#F9F9F9",
      }}
    >
      <p>{name}</p>
      <p>{national_id}</p>
      <p>{status}</p>
      <p>{reason}</p>
      <p>{hospital_name}</p>
      <p>{hospital_phone}</p>
      <p>{date_of_lost.split("T")[0]}</p>
    </div>
  );
};

export default List;
