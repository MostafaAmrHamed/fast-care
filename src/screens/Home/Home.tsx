import React from "react";
import wallpaper from "../../images/wallpaper3.jpg";
import blood from "../../images/blood.jpg";
import lostPeople from "../../images/lostpeople.jpg";
import room from "../../images/room.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container mx-auto mt-5 space-y-10">
      <div className="flex justify-center text-white text-2xl text-center h-[500px]">
        <img
          src={wallpaper}
          alt="wallpaper"
          className="h-[500px] md:h-[500px] md:w-[1440px] absolute"
        />
        <div className="relative top-[150px]">
          <h1>
            We are helping people to search for the nearest hospital that have
            many things that patients may need them like
          </h1>
          <ul className="font-semibold mt-4 space-y-3">
            <li>
              <span className="text-primary-1">1)</span> Rooms
            </li>
            <li>
              <span className="text-primary-1">2)</span>Blood types
            </li>
            <li>
              <span className="text-primary-1">3)</span>Search for lost people
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img
          src={room}
          alt="room"
          className="hidden md:block md:h-[300px] lg:h-[500px] md:w-[550px]"
        />
        <div>
          <p>
            Get your room as fast as possible so the relatives of the patient
            need to know which hospital that have available room before moving
            to any place This will make patient arrive to hospital that have
            room available and get suitable care as fast as possible
          </p>
          <p className="bg-primary-1 p-2 mt-5 w-fit rounded-md text-white">
            <Link to="/rooms">Go To Rooms</Link>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img
          src={blood}
          alt="blood"
          className="hidden md:block md:h-[300px] lg:h-[400px] md:w-[550px] rounded-md"
        />
        <div>
          <p>
            Get a blood pint of specific type as fast as possible so the
            relatives of the patient need to know which hospital that have that
            type of blood before moving to any place This will make patient
            arrive to hospital that have that type available and get suitable
            care as fast as possible
          </p>
          <p className="bg-primary-1 p-2 mt-5 w-fit rounded-md text-white">
            <Link to="/bloodBank">Go To Blood-Bank</Link>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img
          src={lostPeople}
          alt="blood"
          className="hidden md:block md:h-[300px] lg:h-[400px] md:w-[550px] rounded-md"
        />
        <div>
          <p>
            Search for lost people: Many accidents happen and families of
            accident victims may spend days to know in which hospital they are
            and also what about their medical case. so, families need to search
            about their relatives using one of two ways
            <br />
            1) SSN <br />
            2) Description
          </p>
          <p className="bg-primary-1 p-2 mt-5 w-fit rounded-md text-white">
            <Link to="/lostPeople">Go To Lost People</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
