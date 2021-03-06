import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../images/fast_care2.png";
const Navbar = () => {
  const location = useLocation();
  const [navToggle, setNavToggle] = useState(false);
  return (
    <div className="container mx-auto mt-5">
      {/* Desktop Navbar */}
      <div className="md:flex items-center justify-between mx-5 xl:mx-0 hidden">
        <div>
          <img src={Logo} alt="logo" className="w-[200px] h-[50px]" />
        </div>
        <div>
          <ul className="flex justify-between gap-5 text-lg text-text-2">
            <li
              className="hover:text-primary-1 cursor-pointer transition-all ease-in-out"
              style={{ color: location.pathname === "/" ? "#EC3642" : "" }}
            >
              <Link to="/"> Home </Link>
            </li>
            <li
              className="hover:text-primary-1 cursor-pointer transition-all ease-in-out"
              style={{
                color: location.pathname === "/lostPeople" ? "#EC3642" : "",
              }}
            >
              <Link to="/lostPeople"> Lost People </Link>
            </li>
            <li
              className="hover:text-primary-1 cursor-pointer transition-all ease-in-out"
              style={{
                color: location.pathname === "/bloodBank" ? "#EC3642" : "",
              }}
            >
              <Link to="/bloodBank"> Blood Bank </Link>
            </li>
            <li
              className="hover:text-primary-1 cursor-pointer transition-all ease-in-out"
              style={{ color: location.pathname === "/rooms" ? "#EC3642" : "" }}
            >
              <Link to="/rooms"> Rooms </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="mx-5 md:hidden">
        <nav className="flex justify-between items-center mb-1">
          <div>
            <img src={Logo} alt="logo" className="w-[150px] h-[40px]" />
          </div>
          <FiMenu
            size={30}
            className="cursor-pointer"
            onClick={() => {
              setNavToggle(!navToggle);
            }}
          />
        </nav>
        {navToggle && (
          <div className="bg-primary-1 p-5 rounded-b-lg">
            <ul className="space-y-5 text-primary-2">
              <li className="cursor-pointer hover:pl-2 transition-all ease-in-out">
                <Link to="/"> Home </Link>
              </li>
              <li className="cursor-pointer hover:pl-2 transition-all ease-in-out">
                <Link to="/lostPeople"> Lost People </Link>
              </li>
              <li className="cursor-pointer hover:pl-2 transition-all ease-in-out">
                <Link to="/bloodBank"> Blood Bank </Link>
              </li>
              <li className="cursor-pointer hover:pl-2 transition-all ease-in-out">
                <Link to="/rooms"> Rooms </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
