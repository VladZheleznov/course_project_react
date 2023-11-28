import React from 'react'
import s from './ThisDayInfo.module.scss'
import cloud from '../../assets/images/cloud.png'
import IndicatorSvgSelector from '../../assets/icons/indicators/IndicatorSvgSelector';

const ThisDayInfo = () => {
   const items = [
      {
        icon_id: 'temp',
        name: 'Температура',
        value: '-8° - ощущается как -11°',
      },
      {
        icon_id: 'pressure',
        name: 'Давление',
        value: '765 мм ртутного столба - нормальное',
      },
      {
        icon_id: 'precipitation',
        name: 'Осадки',
        value: 'Без осадков',
      },
      {
        icon_id: 'wind',
        name: 'Ветер',
        value: '4 м/с северо-восток - легкий ветер',
      },
   ];

  return (
     <div className={s.this__day_info}>
        <div className={s.this__day_info_items}>
           {items.map(item => (
              <div key={item.icon_id} className={s.item}>
                 <div className={s.indicator}>
                    <IndicatorSvgSelector id={item.icon_id}/>
                 </div>
                 <div className={s.indicator__name}>{item.name}</div>
                 <div className={s.indicator__value}>{item.value}</div>
              </div>
           ))}
        </div>
        <img className={s.cloud__img} src={cloud} alt="облако" />
    </div>
  )
}

export default ThisDayInfo