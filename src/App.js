import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState({})
  const [location, setlocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=297bb3c7b0f6f7c246b97e258d7e794d`;
  const searchLocation = (event) => {
    if (event.key === 'Enter') {

      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setlocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <h1>{data.name}</h1>
          </div>
          <div className="temp">
            {data.main ? <h2>{data.main.temp.toFixed()}°F</h2> : null}
          </div>
          <div className="description">
            {data.weather ? <h1>{data.weather[0].main}</h1> : null}
          </div>
        </div>
        {data.name != undefined &&


          <div className="bottom">
            <div className="feels">
              {data.main ? <h1>{data.main.feels_like.toFixed()}°F</h1> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <h1>{data.main.humidity}%</h1> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <h1>{data.main.speed.toFixed()} MPH</h1> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
