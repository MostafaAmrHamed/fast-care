import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-between lg:mx-5 xl:mx-0">
        <div>
          <h1 className="text-2xl text-primary-1 font-semibold">Fast Care</h1>
        </div>
        <div>
          <ul className="flex justify-between gap-5 text-lg text-text-2">
            <li className="hover:text-primary-1 cursor-pointer transition-all ease-in-out">
              Home
            </li>
            <li className="hover:text-primary-1 cursor-pointer transition-all ease-in-out">
              About
            </li>
            <li className="hover:text-primary-1 cursor-pointer transition-all ease-in-out">
              Lost People
            </li>
            <li className="hover:text-primary-1 cursor-pointer transition-all ease-in-out">
              Blood Bank
            </li>
            <li className="hover:text-primary-1 cursor-pointer transition-all ease-in-out">
              Rooms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
