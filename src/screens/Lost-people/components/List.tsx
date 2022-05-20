import React from "react";

const List = () => {
  const data = [
    {
      name: "Chetos",
      ssn: "AA-12-34-56-A",
      case: "Stable",
      reason: "Accident",
      hospital: "The Royal London Hospital",
      phone: "0122548879",
      date: "5-21-2022",
    },
    {
      name: "Chetos",
      ssn: "AA-12-34-56-A",
      case: "Stable",
      reason: "Accident",
      hospital: "The Royal London Hospital",
      phone: "0122548879",
      date: "5-21-2022",
    },
    {
      name: "Chetos",
      ssn: "AA-12-34-56-A",
      case: "Stable",
      reason: "Accident",
      hospital: "The Royal London Hospital",
      phone: "0122548879",
      date: "5-21-2022",
    },
    {
      name: "Chetos",
      ssn: "AA-12-34-56-A",
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
          <div
            className="grid grid-cols-7 items-center gap-5 text-center text-base text-text-1 bg-primary-2 py-2 rounded-md shadow-md cursor-default"
            style={{
              backgroundColor: index % 2 === 0 ? "" : "#EC3642",
              color: index % 2 === 0 ? "" : "#F9F9F9",
            }}
            key={index}
          >
            <p>{element.name}</p>
            <p>{element.ssn}</p>
            <p>{element.case}</p>
            <p>{element.reason}</p>
            <p>{element.hospital}</p>
            <p>{element.phone}</p>
            <p>{element.date}</p>
          </div>
        );
      })}
    </>
  );
};

export default List;
