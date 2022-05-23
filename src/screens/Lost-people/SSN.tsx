import axios from "axios";
import { useEffect, useState } from "react";
import { searchName, searchSSN, searchSsnAndName } from "../../api";
import { LostSSN } from "../../types";
import List from "./components/List";

const SSN = () => {
  const [data, setData] = useState<LostSSN[]>();
  const [search, setSearch] = useState({ ssn: "", name: "" });

  const filterSearch = () => {
    if (search.ssn && !search.name) {
      searchSSN(search.ssn, setData);
    } else if (!search.ssn && search.name) {
      searchName(search.name, setData);
    } else if (search.ssn && search.name) {
      searchSsnAndName(search.ssn, search.name, setData);
    } else {
      lostPeopleFetch();
    }
  };
  const lostPeopleFetch = async () => {
    axios
      .get(
        "https://glacial-everglades-74360.herokuapp.com/findbyid/?format=json"
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
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
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 ">
        <input
          type="text"
          className="border-2 border-primary-1 focus:outline-none rounded-md p-1"
          placeholder="Full Name"
          onChange={(e) => {
            setSearch({ ...search, name: e.target.value });
          }}
        />
        <input
          type="text"
          className="border-2 border-primary-1 focus:outline-none rounded-md p-1"
          placeholder="SSN"
          onChange={(e) => {
            setSearch({ ...search, ssn: e.target.value });
          }}
        />
        <button
          className="bg-primary-1 text-primary-2 text-lg px-6 py-1 rounded-md"
          onClick={() => {
            filterSearch();
          }}
        >
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
      {data?.length !== 0 ? (
        data?.map((person, index) => {
          return (
            <List
              date_of_lost={person.date_of_lost}
              gender={person.gender}
              hospital_name={person.hospital_name}
              id={index}
              hospital_phone={person.hospital_phone}
              name={person.name}
              national_id={person.national_id}
              reason={person.reason}
              status={person.status}
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

export default SSN;
