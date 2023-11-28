import React from 'react'
import s from "./Header.module.scss"
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'
import Select from 'react-select'

const Header = () => {
   
   const options = [
      { value: 'city-1', label: 'Минск' },
      { value: 'city-2', label: 'Мозырь' },
      { value: 'city-3', label: 'Молодечно' }
   ]
   
   const colourStyles = {
      control: styles => ({
         ...styles,
         backgroundColor: "rgba(71, 147, 255, 0.20)",
         width: "194px",
         height: "37px",
         border: "none",
         borderRadius: "10px",
         zIndex: 100,

      })
   }

  return (
     <header className={s.header}>
        <div className={s.wrapper}>
           <div className={s.logo}><GlobalSvgSelector id="header-logo" /></div>
           <div className={s.title}>Weather forecast</div>
        </div>
        <Select
           defaultValue={options[0]}
           styles={colourStyles}
           options={options} />
    </header>
  )
}

export default Header