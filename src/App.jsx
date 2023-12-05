import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
import Days from './components/Days/Days'


function App() {

  const [api, setApi] = useState({});
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Mozyr&appid=a39e60787450378f4ee1c33503b74cfe&units=metric')
      .then(response => response.json())
      .then(data => {
          setApi(data)
      })
      .catch(error => console.log(error));
  }, []);
  console.log(api);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="wrapper">
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
      </div>
    </div>
  );
}

export default App;
