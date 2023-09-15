import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=farmers&sortBy=popularity&apiKey=7ae26d7c687a4877a549e6537c644fd3"
      );
      setData(response.data.articles);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <Navbar />
    <div className="container my-4">
      <h1 className="text-center mb-4" style={{ color: "#4CAF50" }}>
        <u>TOP AGRICULTURE HEADLINES</u>
      </h1>
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
    </>
  );
};

export default FetchData;