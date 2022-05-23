import React, { useEffect, useState } from "react";
import ListDescription from "./components/ListDescription";
import axios from "axios";
import { LostPeople } from "../../types";

const Description = () => {
  let date = "";
  const [lostData, setLostData] = useState<LostPeople[]>();
  useEffect(() => {
    const lostPeopleFetch = async () => {
      axios
        .get(
          "https://glacial-everglades-74360.herokuapp.com/findbycl/?data=json"
        )
        .then((response) => {
          setLostData(response.data);
          console.log(lostData);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    lostPeopleFetch();
  }, []);
  return (
    <div className="space-y-5">
      <div className="flex flex-col md:flex-row gap-2 md:gap-5">
        <input
          type="date"
          className="border-2 border-primary-1 focus:outline-none rounded-md p-1 px-2"
          placeholder="2/3/2020"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            date = e.target.value;
          }}
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
      {lostData ? (
        lostData.map((element, index) => {
          return (
            <ListDescription
              status={element.status}
              date_of_lost={element.date_of_lost}
              details={element.details}
              gender={element.gender}
              hair_color={element.hair_color}
              height={element.height}
              hospital_name={element.hospital_name}
              hospital_phone={element.hospital_phone}
              id={element.id}
              reason={element.reason}
              shirt_color={element.shirt_color}
              skin_color={element.skin_color}
              key={index}
            />
          );
        })
      ) : (
        <h1 className="text-center text-2xl text-text-2"> There is no data </h1>
      )}
    </div>
  );
};

export default Description;
