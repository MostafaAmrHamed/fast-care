import React from "react";
import Details from "./Details";

const ListDescription = () => {
  const data = [
    {
      gender: "Male",
      case: "Stable",
      reason: "Accident",
      hospital: "The Royal London Hospital",
      phone: "0122548879",
      date: "5-21-2022",
    },
    {
      gender: "Male",
      case: "Stable",
      reason: "Accident",
      hospital: "The Royal London Hospital",
      phone: "0122548879",
      date: "5-21-2022",
    },
    {
      gender: "Male",
      case: "Stable",
      reason: "Accident",
      hospital: "The Royal London Hospital",
      phone: "0122548879",
      date: "5-21-2022",
    },
  ];

  return (
    <>
      {data.map((element, index) => {
        return (
          <div key={index}>
            <div
              className="bg-primary-2 text-text-1 py-4 rounded-md shadow-md"
              style={{
                backgroundColor: index % 2 === 0 ? "" : "#EC3642",
                color: index % 2 === 0 ? "" : "#F9F9F9",
              }}
            >
              <div className="md:grid md:grid-cols-6 md:items-center md:gap-5 text-center text-base  cursor-default">
                <p>{element.gender}</p>
                <p>{element.case}</p>
                <p>{element.reason}</p>
                <p>{element.hospital}</p>
                <p>{element.phone}</p>
                <p>{element.date}</p>
              </div>
              {/* <p
                className="text-right pb-1 pt-3 pr-4 text-primary-1 cursor-pointer"
                style={{
                  color: index % 2 === 0 ? "" : "#F9F9F9",
                }}
                onClick={() => {
                  toggle ? (toggle = false) : (toggle = true);
                }}
              >
                More details...
              </p> */}
            </div>
            {/* {toggle && (
              <div className="bg-primary-2 rounded-md shadow-md mt-2 p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                officiis animi facilis necessitatibus iste libero veniam non
                aperiam? Quibusdam mollitia voluptatem qui, odio dicta natus
                rerum delectus repudiandae repellat animi.
              </div>
            )} */}
            <Details />
          </div>
        );
      })}
    </>
  );
};

export default ListDescription;
