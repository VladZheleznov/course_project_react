import React, { useState } from 'react'
import s from './Days.module.scss'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

const Days = () => {

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
        {days.map(day => (
           <div key={day.day} className={s.cards}>
               <div className={s.day}>{getWeekDay(weekDay)}</div>
               <div className={s.day__info}>{getDateMonth(monthDay)}</div>
               <div className={s.img}>
               <GlobalSvgSelector id={day.icon_id} />
               </div>
               <div className={s.temp__day}>{day.temp_day}</div>
               <div className={s.temp__night}>{day.temp_day}</div>
               <div className={s.info}>{day.info}</div>
           </div>
        ))}
    </div>
  )
}

export default Days