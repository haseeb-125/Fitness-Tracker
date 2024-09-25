import React, { useState } from 'react';
import { FaHome, FaChevronDown, FaChevronUp, FaDumbbell, FaChartLine, FaRunning, FaUtensils, FaListAlt, FaCog, FaPlus } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo-2.svg";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setSecondDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleSecondDropdown = () => {
    setSecondDropdownOpen(!isSecondDropdownOpen);
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <div className={`fixed lg:static lg:w-64 bg-bg_black text-black flex flex-col transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 min-h-screen`}>
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:p-4 lg:text-2xl lg:font-bold mt-2">
        <Link to="/">
          <img src={logo} alt="logo" className="h-12 md:w-28" />
        </Link>
      </div>

      <ul className="flex-1 p-4 space-y-4">
        <li>
          <Link
            to="/db/dashboard"
            className={`flex items-center bg-bg_black p-2 rounded-e-full border-l-4 transition duration-300 ${isActiveLink('/db/dashboard') ? 'bg-black text-orangecolor border-orangecolor' : 'text-[#6c7293] border-transparent hover:bg-black hover:border-orangecolor hover:text-orangecolor'}`}
          >
            <FaHome className="text-2xl" />
            <span className="ml-4 lg:ml-2">Dashboard</span>
          </Link>
        </li>

        {/* First Dropdown */}
        <li className="flex flex-col">
          <div
            className="flex items-center bg-bg_black justify-between cursor-pointer hover:bg-black text-[#6c7293] p-2 rounded-e-full border-l-4 border-transparent hover:border-orangecolor transition duration-300 hover:text-orangecolor"
            onClick={toggleDropdown}
          >
            <div className="flex items-center">
              <FaDumbbell className="text-2xl" />
              <span className="ml-4 lg:ml-2">Workout Tracking</span>
            </div>
            <div>
              {isDropdownOpen ? <FaChevronUp className="text-1xl" /> : <FaChevronDown className="text-1xl" />}
            </div>
          </div>
          {isDropdownOpen && (
            <ul className="ml-8 mt-2 space-y-2">
              <li>
                <Link
                  to="/db/routineList"
                  className={`flex items-center bg-bg_black p-2 rounded-e-full border-l-4 transition duration-300 ${isActiveLink('/db/routineList') ? 'bg-black text-orangecolor border-orangecolor' : 'text-[#6c7293] border-transparent hover:bg-black hover:border-orangecolor hover:text-orangecolor'}`}
                >
                  <FaRunning className="text-2xl" />
                  <span className="ml-4 lg:ml-2">Add Workout</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/db/categoryList"
                  className={`flex items-center bg-bg_black p-2 rounded-e-full border-l-4 transition duration-300 ${isActiveLink('/db/categoryList') ? 'bg-black text-orangecolor border-orangecolor' : 'text-[#6c7293] border-transparent hover:bg-black hover:border-orangecolor hover:text-orangecolor'}`}
                >
                  <FaCog className="text-2xl" />
                  <span className="ml-4 lg:ml-2">Add More Category</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/db/tagList"
                  className={`flex items-center bg-bg_black p-2 rounded-e-full border-l-4 transition duration-300 ${isActiveLink('/db/tagList') ? 'bg-black text-orangecolor border-orangecolor' : 'text-[#6c7293] border-transparent hover:bg-black hover:border-orangecolor hover:text-orangecolor'}`}
                >
                  <FaCog className="text-2xl" />
                  <span className="ml-4 lg:ml-2">Add More Tags</span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Second Dropdown */}
        <li className="flex flex-col">
          <div
            className="flex items-center justify-between cursor-pointer bg-bg_black hover:bg-black text-[#6c7293] p-2 rounded-e-full border-l-4 border-transparent hover:border-orangecolor transition duration-300 hover:text-orangecolor"
            onClick={toggleSecondDropdown}
          >
            <div className="flex items-center">
              <FaListAlt className="text-2xl" />
              <span className="ml-4 lg:ml-2">Nutrition Tracking</span>
            </div>
            <div>
              {isSecondDropdownOpen ? <FaChevronUp className="text-1xl" /> : <FaChevronDown className="text-1xl" />}
            </div>
          </div>
          {isSecondDropdownOpen && (
            <ul className="ml-8 mt-2 space-y-2">
              <li>
                <Link
                  to="/db/nutritionList"
                  className={`flex items-center bg-bg_black p-2 rounded-e-full border-l-4 transition duration-300 ${isActiveLink('/db/nutritionList') ? 'bg-black text-orangecolor border-orangecolor' : 'text-[#6c7293] border-transparent hover:bg-black hover:border-orangecolor hover:text-orangecolor'}`}
                >
                  <FaUtensils className="text-2xl" />
                  <span className="ml-4 lg:ml-2">Add Nutrition</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/db/mealTypeList"
                  className={`flex items-center bg-bg_black p-2 rounded-e-full border-l-4 transition duration-300 ${isActiveLink('/db/mealTypeList') ? 'bg-black text-orangecolor border-orangecolor' : 'text-[#6c7293] border-transparent hover:bg-black hover:border-orangecolor hover:text-orangecolor'}`}
                >
                  <FaCog className="text-2xl" />
                  <span className="ml-4 lg:ml-2">Add More Meal</span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link
            to="/db/progressList"
            className={`flex items-center bg-bg_black p-2 rounded-e-full border-l-4 transition duration-300 ${isActiveLink('/db/progressList') ? 'bg-black text-orangecolor border-orangecolor' : 'text-[#6c7293] border-transparent hover:bg-black hover:border-orangecolor hover:text-orangecolor'}`}
          >
            <FaChartLine className="text-2xl" />
            <span className="ml-4 lg:ml-2">Progress Tracking</span>
          </Link>
        </li>

        <li>
          <Link
            to="/db/mainReminder"
            className={`flex items-center bg-bg_black p-2 rounded-e-full border-l-4 transition duration-300 ${isActiveLink('/db/mainReminder') ? 'bg-black text-orangecolor border-orangecolor' : 'text-[#6c7293] border-transparent hover:bg-black hover:border-orangecolor hover:text-orangecolor'}`}
          >
            <FaPlus className="text-2xl" />
            <span className="ml-4 lg:ml-2">Set Reminder</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
