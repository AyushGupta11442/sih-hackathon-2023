import React, { useState, useEffect } from 'react';

function MLApp() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/data') // Relative URL targeting the Flask API on the same port
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>tere ma chuit badi majboot</h1>
      <h1>{data.message}</h1>
    </div>
  );
}

export default MLApp;
