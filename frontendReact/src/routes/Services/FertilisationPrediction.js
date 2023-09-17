import React, { Component } from "react";
import "./CropSelectionStyles.css";
import axios from "axios"

class FertilisationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nitrogen: "",
      phosphorus: "",
      potassium: "",
      cropname:"",
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
      pottasium: parseInt( this.state.potassium , 10 ),
      cropname:(this.state.cropname),
    };

    try {
      // Make a POST request to your API endpoint
      const response = await axios.post('http://127.0.0.1:5000/fertilizer-predict', inputData);

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
              Crop Name:
              <input
                type="string"
                name="cropname"
                value={this.state.cropname}
                onChange={this.handleInputChange}
                placeholder="Enter the value"
              />
            </label>
  

            <button type="submit">Determine Suitable fertilizer</button>
          </form>

          {/* Display the selected crop based on your logic */}
          {this.state.message && (
            <div className="cropname">
              <h3 className="advice">Suggested Crop: {this.state.message}</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default FertilisationForm;