import React, { useState } from "react";
import apiKey from "./api/api";
import axios from "axios";
function App() {
  const [data, setData] = useState("");
  const [location, setLocation] = useState("");

  let objFaringejt = {
    minus: 32,
    delenie: 1.8,
  };

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(URL)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => alert("Uncorrect city name. Try again!"));
      setLocation("");
    }
  };
  return (
    <div className="app">
         <div className="search">
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              type="text"
              placeholder="Enter your city"
            />
          </div>
      <div className="container">
   
        <div className="top">
          
          <div className="location">
            <div className="locationName">
              {data.name}
            </div>
            <div className="temp">
              {data.main ? (
                <h2>
                  {(
                    (data.main.temp - objFaringejt.minus) /
                    objFaringejt.delenie
                  ).toFixed()}
                  °C
                </h2>
              ) : null}
              <div className="country">
                {data.sys ? (
                  <h2>
                    {data.sys.country}
                  </h2>
                ) : null}
              </div>
            </div>
          </div>

     
         
        </div>
        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <h2>
                  {(
                    (data.main.feels_like - objFaringejt.minus) /
                    objFaringejt.delenie
                  ).toFixed()}
                  °C
                </h2>
              ) : null}
              <p>Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <h2>{data.main.humidity}</h2> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <h2>{data.wind.speed}</h2> : null}
              <p>Wind speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
