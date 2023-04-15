import React, { useState } from "react";

const provinces = [
  "Province 1",
  "Province 2",
  "Province 3",
  "Province 4",
  "Province 5",
  "Province 6",
  "Province 7"
];

const DropdownMenu = () => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleProvinceSelect = (province) => {
    setSelectedProvince(province);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative inline-block text-left top-[23rem] left-[2rem]">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          {selectedProvince ? selectedProvince : "Select Province"}
          <svg
            className="w-5 h-5 ml-2 -mr-1 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12l-5-5 1.41-1.42L10 9.17l3.59-3.59L15 7z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      {isMenuOpen && (
        <div
          className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {provinces.map((province) => (
              <a
                key={province}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleProvinceSelect(province)}
              >
                {province}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
