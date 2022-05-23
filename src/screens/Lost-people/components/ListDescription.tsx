import React from "react";
import { LostPeople } from "../../../types";
import Details from "./Details";

const ListDescription: React.FC<LostPeople> = ({
  date_of_lost,
  details,
  gender,
  hair_color,
  height,
  hospital_name,
  hospital_phone,
  id,
  reason,
  shirt_color,
  skin_color,
  status,
}) => {
  return (
    <div>
      <div
        className="bg-primary-2 text-text-1 py-4 rounded-md shadow-md"
        style={{
          backgroundColor: id % 2 === 0 ? "#EC3642" : "",
          color: id % 2 === 0 ? "#F9F9F9" : "",
        }}
      >
        <div className="md:grid md:grid-cols-6 md:items-center md:gap-5 text-center text-base  cursor-default">
          <p>{gender}</p>
          <p>{status}</p>
          <p>{reason}</p>
          <p>{hospital_name}</p>
          <p>{hospital_phone}</p>
          <p>{date_of_lost.split("T")[0]}</p>
        </div>
      </div>
      <Details
        hair_color={hair_color}
        shirt_color={shirt_color}
        height={height}
        skin_color={skin_color}
        index={id}
        details={details}
      />
    </div>
  );
};

export default ListDescription;
