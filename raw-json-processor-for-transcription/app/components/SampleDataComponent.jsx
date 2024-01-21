"use client";
// SampleDataComponent.js
import { useState } from "react";

const SampleDataComponent = () => {
  const [inputData, setInputData] = useState("");
  const [output, setOutput] = useState("");

  const handleButtonClick = () => {
    // Process the input data (you can replace this with your logic)
    const processedOutput = processInputData(inputData);

    // Update state with the processed output
    setOutput(JSON.stringify(processedOutput, null, 2));
  };

  const processInputData = (data) => {
    const jsonData = JSON.parse(data);
    let output = jsonData.trancription.segments.map(
      (segment) => segment["text"]
    );
    return output;
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="inputData"
        >
          Input Data:
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          id="inputData"
          value={inputData}
          rows={10}
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleButtonClick}
        >
          Process Input Data
        </button>
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="output"
        >
          Output:
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          id="output"
          value={output}
          readOnly
          rows={5}
          cols={50}
        />
      </div>
    </div>
  );
};

export default SampleDataComponent;
