import React from 'react'
import { NetflixImage, SUPPORTED_LANGUAGES } from '../utils/constant'
import { changeLang } from '../utils/configSlice'
import {useDispatch} from "react-redux";
const Header = () => {

  const dispatch = useDispatch();

  const handleLang = (e) => {
    dispatch(changeLang(e.target.value));
  }

  return (
    <div className="px-16 bg-gradient-to-b from-neutral-900 md:bg-gradient-to-b from-neutral-900 md:px-40 py-2 flex justify-between">
        <img className="hidden sm:inline-block md:inline-block w-48 " src= {NetflixImage} alt="logo"/>
        <img className=" w-6 inline-block sm:hidden  md:hidden " src= "https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg"/>
          <select className="mt-2 h-10 px-2 sm:px-4 md:px-4 lg:px-4 md:mt-4  rounded-md bg-slate-800 text-white"
          onChange={handleLang} >
          {
            SUPPORTED_LANGUAGES.map((lang) => {
              return <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>
              } )
          }
         </select>
    </div>
  )
}

export default Header
