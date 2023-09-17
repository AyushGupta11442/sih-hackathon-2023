import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsStyles.css"; // Import the CSS file for styling

const FetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("hi"); 

  const fetchData = async () => {
    const languageCode = selectedLanguage === "en" ? "en" : "hi"; // Map to language code
    try {
      const response = await axios.get(
        languageCode === "en" ? "https://newsapi.org/v2/everything?q=agriculture+farming+crops+farmers+agricultural+harvest+India&from=2023-08-15&sortBy=publishedAt&apiKey=7ae26d7c687a4877a549e6537c644fd3&language=en" : "https://newsapi.org/v2/everything?q=%E0%A4%95%E0%A5%83%E0%A4%B7%E0%A4%BF%20%E0%A4%96%E0%A5%87%E0%A4%A4%E0%A5%80&from=2023-08-15&sortBy=publishedAt&apiKey=7ae26d7c687a4877a549e6537c644fd3&language=hi"
      );
      setData(response.data.articles);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedLanguage]); // Trigger fetchData when the selectedLanguage changes

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="container-news my-4">
      <h1 className="text-center mb-4" style={{ color: "#4CAF50" }}>
        <u>TOP AGRICULTURE HEADLINES</u>
      </h1>
      <div className="text-center mb-4">
        <label className="label-select-language">
          Select Language:
        </label>{" "}
        <select value={selectedLanguage} onChange={handleLanguageChange} className="language-select">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="row">
          {data.map((article, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                {article.urlToImage ? (
                  <img
                    src={article.urlToImage}
                    className="card-img-top"
                    alt="News"
                  />
                ) : (
                  <div className="image-placeholder">Image Not Available</div>
                )}
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                </div>
                <div className="card-footer">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-block"
                    style={{
                      backgroundColor: "#4CAF50", // Green color
                      color: "#fff", // White text color
                      border: "none", // Remove border
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchData;