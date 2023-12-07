import React, { useState } from 'react'
import s from "./Header.module.scss"
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'

const Header = ({onClick}) => {
   
   const [value, setValue] = useState('');

   const handleClick = () => {
      onClick(value);
   }
   
  return (
     <header className={s.header}>
        <div className={s.wrapper}>
           <div className={s.logo}><GlobalSvgSelector id="header-logo" /></div>
           <div className={s.title}>Weather forecast</div>
        </div>
        <form action='#'>
           <input
              type="text"
              className={s.input}
              placeholder='Введите город'
              value={value}
              onChange={e => setValue(e.target.value)}
           />
           <input
              className={s.button}
              type="submit"
              value={'Ok'}
              onClick={handleClick}
           />
        </form>
    </header>
  )
}

export default Header