import React from 'react'
import s from './Days.module.scss'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

const Days = () => {
   const days = [
      {
        day: 'Сегодня',
        day_info: '29 нояб',
        icon_id: 'sun',
        temp_day: '-4',
        temp_night: '-7',
        info: 'Облачно',
      },
      {
        day: 'Завтра',
        day_info: '30 нояб',
        icon_id: 'mainly_cloudy',
        temp_day: '-7',
        temp_night: '-4',
        info: 'Облачно',
      },
      {
        day: 'Пт',
        day_info: '1 дек',
        icon_id: 'mainly_cloudy',
        temp_day: '-7',
        temp_night: '-3',
        info: 'облачно',
      },
      {
        day: 'Сб',
        day_info: '2 дек',
        icon_id: 'mainly_cloudy',
        temp_day: '-7',
        temp_night: '-3',
        info: 'Облачно',
      },
      {
        day: 'Вс',
        day_info: '3 дек',
        icon_id: 'mainly_cloudy',
        temp_day: '-7',
        temp_night: '-3',
        info: 'Облачно',
      },
      {
        day: 'Пн',
        day_info: '4 дек',
        icon_id: 'sun',
        temp_day: '-9',
        temp_night: '-6',
        info: 'Облачно',
      },
      {
        day: 'Вт',
        day_info: '5 дек',
        icon_id: 'sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно',
      },
    ];
  return (
     <div className={s.days}>
        {days.map(day => (
           <div key={day.day} className={s.cards}>
               <div className={s.day}>{day.day}</div>
               <div className={s.day__info}>{day.day_info}</div>
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