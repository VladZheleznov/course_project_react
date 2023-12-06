import React, { useEffect, useState } from 'react'
import s from './Days.module.scss'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import axios from 'axios';

const Days = () => {

  const [weatherFor5Days, setWeatherFor5Days] = useState([])
  useEffect(() => {
    let city = 'Mozyr';
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a39e60787450378f4ee1c33503b74cfe&units=metric&lang=ru`)
      .then(data => setWeatherFor5Days(data.data.list.slice(0,7)));
  }, []);

  const weekDay = new Date();
  const monthDay = new Date();
  
  const getWeekDay = (date) => {
    date.setDate(date.getDate() + 1);
    return date.toLocaleString('default', {weekday: 'long'});
  }
  
  const getDateMonth = (date) => {
    date.setDate(date.getDate() + 1);
    return date.getDate() + ' ' + date.toLocaleString('default', { month: 'long' }).slice(0, 3);
  }

   const days = [
      {
        icon_id: 'sun',
        temp_day: '-4',
        temp_night: '-7',
        info: 'Облачно',
      },
      {
        icon_id: 'mainly_cloudy',
        temp_day: '-7',
        temp_night: '-4',
        info: 'Облачно',
      },
      {
        icon_id: 'mainly_cloudy',
        temp_day: '-7',
        temp_night: '-3',
        info: 'облачно',
      },
      {
        icon_id: 'mainly_cloudy',
        temp_day: '-7',
        temp_night: '-3',
        info: 'Облачно',
      },
      {
        icon_id: 'mainly_cloudy',
        temp_day: '-7',
        temp_night: '-3',
        info: 'Облачно',
      },
      {
        icon_id: 'sun',
        temp_day: '-9',
        temp_night: '-6',
        info: 'Облачно',
     },
     {
        icon_id: 'sun',
        temp_day: '-9',
        temp_night: '-6',
        info: 'Облачно',
    },
  ];
  
  return (
     <div className={s.days}>
        {weatherFor5Days.map((day, index) => (
           <div key={day.index} className={s.cards}>
               <div className={s.day}>{getWeekDay(weekDay)}</div>
               <div className={s.day__info}>{getDateMonth(monthDay)}</div>
               <div className={s.img}>
               <GlobalSvgSelector id={day.weather[0].icon} />
               </div>
               <div className={s.temp__day}>{Math.round(day.main.temp)}</div>
               <div className={s.temp__night}>{Math.round(day.main.feels_like)}</div>
               <div className={s.info}>{day.weather[0].description}</div>
           </div>
        ))}
    </div>
  )
}

export default Days