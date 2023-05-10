import React, { useState } from 'react';

function RadioComponent() {
  const [selectedOption, setSelectedOption] = useState("Male");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div className="flex flex-col gap-4">
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-blue-500"
          value="Male"
          checked={selectedOption === "Male"}
          onChange={handleOptionChange}
        />
        <span className="ml-2 text-gray-700">Male</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-blue-500"
          value="Female"
          checked={selectedOption === "Female"}
          onChange={handleOptionChange}
        />
        <span className="ml-2 text-gray-700">Female</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-blue-500"
          value="Others"
          checked={selectedOption === "Others"}
          onChange={handleOptionChange}
        />
        <span className="ml-2 text-gray-700">Others</span>
      </label>
    </div>
  );
}

export default RadioComponent;
