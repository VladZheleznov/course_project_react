import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
import Days from './components/Days/Days'
import axios from "axios";


function App() {

  const [mainInfo, setMainInfo] = useState({});
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [windInfo, setWindInfo] = useState({});

  useEffect(() => {
    let city = 'Mozyr';
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a39e60787450378f4ee1c33503b74cfe&units=metric&lang=ru`)
      .then(data => (
        setMainInfo(data.data.main),
        setWeatherInfo(data.data.weather[0]),
        setWindInfo(data.data.wind)
      ));
  }, []);

  const currentTemp = Math.round(mainInfo.temp) + '°';
  const feelLikesTemp = Math.round(mainInfo.feels_like) + '°';
  const pressure = mainInfo.pressure;
  const description = weatherInfo.description;
  const wind = windInfo.speed;
  const icon = weatherInfo.icon;

  return (
    <div className="App">
      <div className="container">
        <Header />
          <div className="wrapper">
          <ThisDay
            temp={currentTemp}
            icon={icon}
          />
          <ThisDayInfo
            temp={currentTemp}
            feelsLikeTemp={feelLikesTemp}
            pressure={pressure}
            description={description}
            wind={wind}
          />
          </div>
            <Days />
      </div>
    </div>
  );
}

export default App;
