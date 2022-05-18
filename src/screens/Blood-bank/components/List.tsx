import React from "react";

const List = () => {
  const data = [
    { name: "The Royal London Hospital", phone: "+44 20 7377" },
    { name: "The Royal London Hospital", phone: "+44 20 7377" },
    { name: "The Royal London Hospital", phone: "+44 20 7377" },
    { name: "The Royal London Hospital", phone: "+44 20 7377" },
    { name: "The Royal London Hospital", phone: "+44 20 7377" },
    { name: "The Royal London Hospital", phone: "+44 20 7377" },
    { name: "The Royal London Hospital", phone: "+44 20 7377" },
  ];
  return (
    <div>
      <div className="grid grid-cols-12 gap-2 text-center text-xl text-text-1 font-bold mb-5">
        <h1 className="col-span-6">Name</h1>
        <h1 className="col-span-6">Phone</h1>
      </div>

      <div className="space-y-3">
        {data.map((element, index) => {
          return (
            <div
              className="grid grid-cols-12 gap-2 text-center text-base text-text-1 bg-primary-2 p-3 rounded-md shadow-md cursor-default"
              style={{
                backgroundColor: index % 2 === 0 ? "" : "#EC3642",
                color: index % 2 === 0 ? "" : "#F9F9F9",
              }}
              key={index}
            >
              <h1 className="col-span-6">{element.name}</h1>
              <h1 className="col-span-6">{element.phone}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
