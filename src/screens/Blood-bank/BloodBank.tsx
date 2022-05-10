import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const BloodBank = () => {
  const [bloodType, setBloodType] = useState("");
  return (
    <div className="container mx-auto mt-5">
      <div className="flex flex-col md:flex-row gap-5 mx-2 md:mx-0 w-fit">
        <button
          className="bg-primary-1 text-base md:text-lg px-4 py-2 text-primary-2 flex items-center gap-2 rounded-lg"
          onClick={() => {
            console.log(bloodType);
          }}
        >
          Get your current location
          <HiLocationMarker size={30} />
        </button>
        <select
          value={bloodType}
          onChange={(e) => {
            setBloodType(e.target.value);
          }}
          className="border-2 border-primary-1 px-4 text-lg rounded-md"
        >
          <option value="">Bood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>
      {/* <div className="text-center text-5xl font-bold flex justify-center items-center h-[300px] md:h-[400px] leading-normal">
        <h1>
          <span className="text-red-700">1</span> pint
          <br /> can save <br />
          <span className="text-red-700"> 3</span> lives
        </h1>
      </div> */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="p-2 bg-text-2 mt-5 rounded-md">
          <MapContainer
            className="h-[300px] w-[300px] md:h-[350px] md:w-[600px] lg:w-[450px] xl:w-[650px] xl:h-[450px]"
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="text-center text-5xl font-bold leading-normal">
          <h1>
            <span className="text-red-700">1</span> pint
            <br /> can save <br />
            <span className="text-red-700"> 3</span> lives
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BloodBank;
