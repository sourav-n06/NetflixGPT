
import React from 'react'
import { lang } from '../utils/langConstant'
import {useSelector} from "react-redux"
const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center ">
        <form className="w-1/2 p-2 bg-black rounded-md grid grid-cols-12 bg-opacity-80">
            <input className="p-4 m-2 col-span-9 rounded-md bg-opacity-100 bg-white font-bold text-lg" type="text" 
             placeholder = {lang[langKey].gptSearchPlaceholder}></input>
            <button className="p-4 m-2 bg-red-600 rounded-md text-white font-bold col-span-3 text-lg">{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
