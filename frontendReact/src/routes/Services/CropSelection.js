import React, { Component } from "react";
import "./CropSelectionStyles.css";
import axios from "axios"



const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const indianCities = [
  {
    state: "Andhra Pradesh",
    cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
  },
  {
    state: "Arunachal Pradesh",
    cities: ["Itanagar", "Naharlagun", "Tawang", "Bomdila"],
  },
  { state: "Assam", cities: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat"] },
  { state: "Bihar", cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"] },
  { state: "Chhattisgarh", cities: ["Raipur", "Bhilai", "Bilaspur", "Korba"] },
  // Add more cities for other states here
];

class CropForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nitrogen: "",
      phosphorus: "",
      potassium: "",
      pHLevel: "",
      rainfall: "",
      state: "",
      city: "",
      message: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the input data object
    const inputData = {
      nitrogen: parseInt(this.state.nitrogen, 10),
      phosphorous: parseInt( this.state.phosphorus , 10),
      potassium: parseInt( this.state.potassium , 10 ),
      pH: this.state.pHLevel, // Changed "ph" to "pH" to match the input data
      rainfall: this.state.rainfall,
      city: this.state.city,
      state: this.state.state, // Changed "Uttaranchal" to "Uttarakhand" to match the state name
    };

    try {
      // Make a POST request to your API endpoint
      const response = await axios.post('http://127.0.0.1:5000/crop-predict', inputData);

      // Update the state with the response message
      this.setState({ message: response.data.message });
      console.log(this.state.message)
    } catch (error) {
      // Handle errors
      console.error('error', error);
    }
  };


  render() {
    return (
      <div className="container-crop">
        <h2>Find out the most suitable crop to be grown in your farm.</h2>
        <div className="form-crop">
          <form onSubmit={this.handleSubmit}>
            <label>
              Nitrogen:
              <input
                type="number"
                name="nitrogen"
                value={this.state.nitrogen}
                onChange={this.handleInputChange}
                placeholder="Enter the value (example:50)"
              />
            </label>
            <br />

            <label>
              Phosphorus:
              <input
                type="number"
                name="phosphorus"
                value={this.state.phosphorus}
                onChange={this.handleInputChange}
                placeholder="Enter the value (example:50)"
              />
            </label>
            <br />

            <label>
              Potassium:
              <input
                type="number"
                name="potassium"
                value={this.state.potassium}
                onChange={this.handleInputChange}
                placeholder="Enter the value (example:50)"
              />
            </label>
            <br />

            <label>
              pH Level:
              <input
                type="number"
                name="pHLevel"
                value={this.state.pHLevel}
                onChange={this.handleInputChange}
                placeholder="Enter the value"
              />
            </label>
            <br />

            <label>
              Rainfall (in mm):
              <input
                type="number"
                name="rainfall"
                value={this.state.rainfall}
                onChange={this.handleInputChange}
                placeholder="Enter the value"
              />
            </label>
            <br />

            <label>
              State:
              <select
                name="state"
                value={this.state.state}
                onChange={this.handleInputChange}
              >
                <option value="">Select a State</option>
                {indianStates.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </label>
            <br />

            <label>
              City:
              <select
                name="city"
                value={this.state.city}
                onChange={this.handleInputChange}
              >
                <option value="">Select a City</option>
                {indianCities
                  .find((stateCities) => stateCities.state === this.state.state)
                  ?.cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
            </label>
            <br />

            <button type="submit">Determine Suitable Crop</button>
          </form>

          {/* Display the selected crop based on your logic */}
          {this.state.message && (
            <div className="cropname">
              <h3>Suggested Crop: {this.state.message}</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CropForm;