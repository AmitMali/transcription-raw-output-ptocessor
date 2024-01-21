"use client";
import React, { useState } from "react";

const JsonProcessor = () => {
  const [inputJson, setInputJson] = useState("");
  const [outputSegments, setOutputSegments] = useState([]);
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    try {
      if (!inputJson.trim()) {
        setError("Input JSON cannot be empty.");
        return;
      }

      setError(""); // Clear any previous error

      const parsedJson = JSON.parse(inputJson);
      const segments = [];

      for (const key in parsedJson) {
        if (parsedJson.hasOwnProperty(key)) {
          const speaker = key;
          const transcriptionObject = parsedJson[key].transcription || {};
          const segmentsArray = transcriptionObject.segments || [];

          segmentsArray.forEach((segment) => {
            const content = segment.text || "";
            segments.push({ speaker, content });
          });
        }
      }

      setOutputSegments(segments);
    } catch (error) {
      setError("Error parsing JSON: " + error.message);
      console.error("Error parsing JSON:", error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">JSON Processor</h1>

      <form onSubmit={handleFormSubmit} className="mb-8">
        <label className="block mb-4">
          <span className="text-gray-700">Input JSON:</span>
          <textarea
            value={inputJson}
            onChange={(e) => setInputJson(e.target.value)}
            rows={5}
            className="mt-2 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600"
        >
          Process JSON
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div>
        <h2 className="text-xl font-semibold mb-2">Output:</h2>
        {outputSegments.map((segment, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{`Speaker ${index + 1}:`}</p>
            <p>{segment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JsonProcessor;
