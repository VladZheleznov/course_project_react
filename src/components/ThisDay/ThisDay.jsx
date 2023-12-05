import React, { useEffect, useState } from 'react'
import s from './ThisDay.module.scss'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'

const ThisDay = () => {
   const [time, setTime] = useState(new Date().toLocaleTimeString().slice(0, -3));
   useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString().slice(0, -3));
      }, 1000);
      return () => clearInterval(interval);
   }, []);
   
   const date = new Date();
   const weekDay = date.toLocaleString('default', { weekday: 'long' });
   const monthDay = date.getDate() + ' ' + date.toLocaleString('default', { month: 'long' }).slice(0, 3);

  return (
     <div className={s.this__day}>
        <div className={s.top__block}>
           <div className={s.top__block_wrapper}>
              <div className={s.this__temp}>-8°</div>
              <div className={s.this__day_name}>Сегодня</div>
              <div className={s.this__day_weekday}>{weekDay}</div>
              <div className={s.this__day_monthday}>{monthDay}</div>
           </div>
           <GlobalSvgSelector id='sun'/>
        </div>
        <div className={s.bottom__block}>
           <div className={s.this__time}>
              Время: <span>{time}</span>
           </div>
           <div className={s.this__city}>
              Город: <span>Минск</span>
           </div>
        </div>
    </div>
  )
}

export default ThisDay