import axios from "axios";
import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { BloodType } from "../../types";
import List from "./components/List";
const BloodBank = () => {
  const [data, setData] = useState<BloodType[]>([]);
  const [bloodType, setBloodType] = useState("");
  const [position, setPosition] = useState<any>(null);
  const BloodTypeFetch = async () => {
    axios
      .get(
        `https://glacial-everglades-74360.herokuapp.com/blood/?format=json&type=${bloodType}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const LocationMarker = () => {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e: any) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="flex flex-row gap-5 mx-2 md:mx-0 w-fit">
        <select
          value={bloodType}
          onChange={(e) => {
            setBloodType(e.target.value);
          }}
          className="border-2 border-primary-1 px-4 text-lg rounded-md focus:outline-none"
        >
          <option value="">Bood Type</option>
          <option value="A%2B">A+</option>
          <option value="A%2D">A-</option>
          <option value="B%2B">B+</option>
          <option value="B%2D">B-</option>
          <option value="AB%2B">AB+</option>
          <option value="AB%2D">AB-</option>
          <option value="O%2B">O+</option>
          <option value="O%2D">O-</option>
        </select>
        <button
          className="bg-primary-1 text-base md:text-lg px-4 py-2 text-primary-2 flex items-center gap-2 rounded-lg"
          onClick={() => {
            BloodTypeFetch();
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-col items-center lg:items-stretch lg:flex-row gap-10">
        <div className="p-2 bg-text-2 mt-5 rounded-md h-fit">
          <MapContainer
            className="h-[300px] w-[300px] md:h-[350px] md:w-[600px] lg:w-[450px] xl:w-[650px] xl:h-[450px]"
            center={[30.04442, 31.235712]}
            zoom={12}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
            {data &&
              data.map((element, index) => {
                return (
                  <Marker
                    position={[
                      Number(element.hospital_latitude),
                      Number(element.hospital_longtitude),
                    ]}
                    key={index}
                  >
                    <Popup>{element.hospital_name}</Popup>
                  </Marker>
                );
              })}
          </MapContainer>
          <p className="flex flex-col md:flex-row text-sm items-center justify-center mt-2 bg-primary-1 text-primary-2 text-center p-2 rounded-md">
            Click on map to get your current location
            <HiLocationMarker size={25} />
          </p>
        </div>
        <div className="w-full">
          {data?.length !== 0 ? (
            <div className="space-y-4">
              <div>
                <div className="hidden md:grid md:grid-cols-12 gap-2 text-center text-xl text-text-1 font-bold mb-5">
                  <h1 className="col-span-6">Name</h1>
                  <h1 className="col-span-6">Phone</h1>
                </div>
              </div>
              {data?.map((element, index) => {
                return (
                  <List
                    hospital_name={element.hospital_name}
                    hospital_phone={element.hospital_phone}
                    id={index}
                    key={index}
                  />
                );
              })}
            </div>
          ) : (
            <div>
              <h1 className="text-center text-5xl font-bold leading-normal">
                <span className="text-red-700">1</span> pint
                <br /> can save <br />
                <span className="text-red-700"> 3</span> lives
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BloodBank;
