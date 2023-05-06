import { useState } from "react";

const FileUploadFormIndividual = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDelete = () => {
    setSelectedFile(null);
    // You can add additional logic here if needed
  };

  return (
    <form className="flex flex-col items-center space-y-4 mt-[47rem] ml-[7rem] w-[12rem] h-[12rem]">
      <label htmlFor="fileInput" className="text-lg font-medium">
        Choose a file:
      </label>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => document.getElementById("fileInput").click()}
        className="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600"
      >
        Select File
      </button>
      {selectedFile ? (
        <div className="flex flex-col items-center space-y-2">
          <p className="text-gray-600">Selected File: {selectedFile.name}</p>
          <button
            type="button"
            onClick={handleDelete}
            className="px-4 py-2 text-white bg-red-500 rounded-md focus:outline-none hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ) : (
        <p>No file selected</p>
      )}
    </form>
  );
};

export default FileUploadFormIndividual;
