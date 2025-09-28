import React from "react";
import { useState } from "react";
import axios from "axios";
import { BsUpload } from "react-icons/bs";

function SHCupload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [extractedText, setExtractedText] = useState("");

  const handleFileChange = (event) => {
    // Check if the user selected a file
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setMessage("");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }
    setIsLoading(true);
    const formData = new FormData();
    formData.append("shcImage", selectedFile);

    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/ocr`;
    try {
      const response = await axios.post(apiUrl, formData);

      console.log("Server response:", response.data);
      const textFromServer = response.data.text;
      setExtractedText(textFromServer);
      setSelectedFile(null); // Clear the file after successful upload
    } catch (error) {
      console.error("Error uploading file:", error);
      if (error.response) {
        setMessage(
          `Upload failed: ${error.response.data.error || "Server error"}`
        );
      } else {
        setMessage("Upload failed! Please check your connection.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // New function to clear the selection
  const handleCancel = () => {
    setSelectedFile(null);
  };

  return (
    <div className="bg-zinc-100 h-50 w-100 mt-10 rounded-3xl p-3">
      <div className="flex">
        <img className="h-42 w-44 rounded-2xl" src="images\sv.jpg" alt="" />
        <div className="p-2 flex-col">
          <label
            className="mt-10 text-green-700 font-semibold text-xl"
            htmlFor=""
          >
            Personalized Crop Recommendation
          </label>
          <div>
            <label className="tracking-tighter text-sm" htmlFor="">
              Upload your SHC for soil health and yield recommendations.
            </label>

            <div className="mt-3 flex">
              {/* --- Conditional Rendering Logic Starts Here --- */}
              {!selectedFile ? (
                // STATE 1: No file selected, show the file input
                <>
                  <label
                    htmlFor="file-upload"
                    className=" flex gap-2 justify-center cursor-pointer bg-green-600 text-white font py-2 px-4 rounded hover:bg-green-700"
                  >
                    Choose File
                    <BsUpload className="w-5 h-5" />
                  </label>

                  <input
                    id="file-upload"
                    type="file" // CORRECTED: type is "file"
                    className="hidden" // Hide the default ugly input
                    onChange={handleFileChange}
                    accept="image/*" // Good practice to specify accepted types
                  />
                </>
              ) : (
                // STATE 2: File is selected, show file name and Upload/Cancel buttons
                <div className="flex items-center gap-2">
                  <p className="font-mono text-sm">{selectedFile.name}</p>
                  <button
                    onClick={handleUpload}
                    disabled={isLoading}
                    className="bg-yellow-500 cursor-pointer text-white font-semibold py-2 px-4 rounded hover:bg-yellow-400 disabled:bg-gray-400"
                  >
                    {isLoading ? "Uploading..." : "Upload"}
                  </button>
                  <button
                    onClick={handleCancel}
                    className="text-red-500 hover:text-red-700"
                  >
                    Cancel
                  </button>
                </div>
              )}
              {/* --- Conditional Rendering Logic Ends Here --- */}

              {message && <p className="mt-2 text-sm">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SHCupload;
