import React, { useEffect, useState } from "react";
import ListDescription from "./components/ListDescription";
import axios from "axios";
import { LostPeople } from "../../types";
import { searchDate, searchDateAndGender, searchGender } from "../../api";

const Description = () => {
  const [lostData, setLostData] = useState<LostPeople[]>();
  const [search, setSearch] = useState({ date: "", gender: "" });
  const filterSearch = () => {
    if (search.date && !search.gender) {
      searchDate(search.date, setLostData);
    } else if (!search.date && search.gender) {
      searchGender(search.gender, setLostData);
    } else if (search.date && search.gender) {
      searchDateAndGender(search.gender, search.date, setLostData);
    } else {
      lostPeopleFetch();
    }
  };
  const lostPeopleFetch = async () => {
    axios
      .get("https://glacial-everglades-74360.herokuapp.com/findbycl/?data=json")
      .then((response) => {
        setLostData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    lostPeopleFetch();
  }, []);
  return (
    <div className="space-y-5">
      <div className="flex flex-col md:flex-row gap-2 md:gap-5">
        <input
          type="date"
          className="border-2 border-primary-1 focus:outline-none rounded-md p-1 px-2"
          placeholder="2/3/2020"
          value={search.date}
          onChange={(e) => {
            setSearch({ ...search, date: e.target.value });
          }}
        />
        <select
          onChange={(e) => {
            setSearch({ ...search, gender: e.target.value });
          }}
          className="border-2 border-primary-1 px-4 text-lg rounded-md focus:outline-none"
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button
          className="bg-primary-1 text-primary-2 text-lg px-6 py-1 rounded-md"
          onClick={() => {
            filterSearch();
          }}
        >
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
      {lostData?.length !== 0 ? (
        lostData?.map((element, index) => {
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
              id={index}
              reason={element.reason}
              shirt_color={element.shirt_color}
              skin_color={element.skin_color}
              key={index}
            />
          );
        })
      ) : (
        <h1 className="text-center font-semibold text-3xl text-text-2 pt-20">
          No Data Available Check Filters
        </h1>
      )}
    </div>
  );
};

export default Description;
