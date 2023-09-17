import React, { useState } from "react";
import axios from "axios";
import "./PestControlStyles.css";

function PestControl() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post("http://127.0.0.1:5000/disease-predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Extract the message from the API response
      const predictionMessage = response.data.message;

      // Handle the prediction message
      setPrediction(predictionMessage);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="crop-disease-container">
      <h1>Crop Disease Detection</h1>
      <form>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </form>
      {prediction && (
        <div className="prediction-result">
          <h2>Prediction Result:</h2>
          <div dangerouslySetInnerHTML={{ __html: prediction }} />
        </div>
      )}
    </div>
  );
}

export default PestControl;

