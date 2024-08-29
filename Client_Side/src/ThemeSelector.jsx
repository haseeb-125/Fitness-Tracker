import React from 'react';
import { useNavigate } from 'react-router-dom';


const ThemeSelector = ({ setTheme }) => {
  const navigate = useNavigate();

  const handleThemeSelection = (Theme) => {
    setTheme(Theme);
    navigate('/home');
  };

  return (
    <>
      <div className="h-screen flex">
        {/* Left Section with Light Theme Button */}
        <div
          className="flex-1 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url(https://winsfolio.net/html/gymon/assets/images/mockup-light.jpg)" }}
        >
          <button
            className="bg-light-bg font-display  border-4 border-red-600 text-light-text px-5  rounded hover:bg-red-600 hover:text-white transition"
            onClick={() => handleThemeSelection('light-theme')}
          >
            Light Mode
          </button>
        </div>

        {/* Divider */}
        <div className="w-4 bg-red-700"></div>

        {/* Right Section with Dark Theme Button */}
        <div
          className="flex-1 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url(https://winsfolio.net/html/gymon/assets/images/mockup-drak.jpg)" }}
        >
          <button
            className=" bg-black border-4 font-display  border-red-600 text-dark-text px-5  rounded hover:bg-red-600  transition"
            onClick={() => handleThemeSelection('dark-theme')}
          >
            Dark Mode
          </button>
        </div>
      </div>
    </>
  );
};

export default ThemeSelector;
