
import React from 'react'
import { lang } from '../utils/langConstant'
import {useSelector} from "react-redux"
import openai from '../utils/openAi';
import {useRef} from "react"

const GptSearchBar = () => {
    const text = useRef(null);
    const langKey = useSelector((store) => store.config.lang);

    const handleSearch = async() => {
      const gptQuery = "Act as a Movie Recommendation system and suggest some movies for query "+
      text.current.value +
      ". Only give me 5 movies names comma separated . example : monster, don, fukrey, hero, eternal"
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      console(chatCompletion.choices)
    }

  return (
    <div className="pt-[10%] flex justify-center ">
        <form className="w-1/2 p-2 bg-black rounded-md grid grid-cols-12 bg-opacity-80" onSubmit={(e) => e.preventDefault()}>
            <input ref = {text} className="p-4 m-2 col-span-9 rounded-md bg-opacity-100 bg-white font-bold text-lg" type="text" 
             placeholder = {lang[langKey].gptSearchPlaceholder}></input>
            <button className="p-4 m-2 bg-red-600 rounded-md text-white font-bold col-span-3 text-lg" onClick={handleSearch} >
             {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
