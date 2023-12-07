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
  const [cityReq, setCityReq] = useState('Минск');
  const [cityResp, setCityResp] = useState('');

  const handleClick = value => {
    setCityReq(value);
  }

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityReq}&appid=a39e60787450378f4ee1c33503b74cfe&units=metric&lang=ru`)
      .then(data => (
        setMainInfo(data.data.main),
        setWeatherInfo(data.data.weather[0]),
        setWindInfo(data.data.wind),
        setCityResp(data.data.name)
      ))
      .catch(() => alert('Ошибка ввода!'))
  }, [cityReq]);

  const currentTemp = Math.round(mainInfo.temp) + '°';
  const feelLikesTemp = Math.round(mainInfo.feels_like) + '°';
  const pressure = mainInfo.pressure;
  const description = weatherInfo.description;
  const wind = windInfo.speed;
  const icon = weatherInfo.icon;
  


  return (
    <div className="App">
      <div className="container">
        <Header onClick={handleClick}/>
          <div className="wrapper">
          <ThisDay
            temp={currentTemp}
            icon={icon}
            city={cityResp}
          />
          <ThisDayInfo
            temp={currentTemp}
            feelsLikeTemp={feelLikesTemp}
            pressure={pressure}
            description={description}
            wind={wind}
          />
          </div>
            <Days city={cityReq}/>
      </div>
    </div>
  );
}

export default App;
