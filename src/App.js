import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios';
import PhotoCards from './components/PhotoCards';

function App() {
  
  const [data, setData] = useState(null);
  const startDate = "2021-02-14"
  const api_key = "DEMO_KEY"

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${startDate}`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <h1>Photos since {startDate}:</h1>
      <PhotoCards photos={data} />
    </div>
  );
}

export default App;
