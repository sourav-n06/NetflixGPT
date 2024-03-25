
import React from 'react'
import { lang } from '../utils/langConstant'
import {useSelector} from "react-redux"
import openai from '../utils/openAi';
import {useRef} from "react"
import { API_OPTION } from '../utils/constant';
import { useDispatch} from "react-redux"
import { addGptMovies } from '../utils/GptSlice';

const GptSearchBar = () => {
    const text = useRef(null);
    const langKey = useSelector((store) => store.config.lang);
    const dispatch = useDispatch();

    const searchMovie = async (movie) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=true&language=en-US&page=1", API_OPTION)
      const json = await data.json();
      return json.results;
    };



    const handleSearch = async() => {
      const gptQuery = "Act as a Movie Recommendation system and suggest some movies for query "+
      text.current.value +
      ". Only give me 5 movies names comma separated . example : monster, don, fukrey, hero, eternal"
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptResult.choices)
      if ( !gptResult.choices.length ) return ;

      const gptMovies = gptResult?.choices[0]?.message.content.split(',');

      const promiseArray = gptMovies.map((movie) => searchMovie(movie));

      const TMDBresult = await Promise.all(promiseArray);
      dispatch(addGptMovies({resultMovies: TMDBresult , MovieNames : gptMovies}));
    }

  return (
    <div className="pt-[25%]  sm:pt-[15%] md:pt-[10%] flex justify-center ">
        <form className="w-full sm:w-1/2 md:w-1/2 p-2 bg-black rounded-md grid grid-cols-12 bg-opacity-80" onSubmit={(e) => e.preventDefault()}>
            <input ref = {text} className="p-2 sm:p-4 md:p-4 m-2 col-span-9 rounded-md bg-opacity-100 bg-white font-bold text-sm sm:text-sm md:text-lg" type="text" 
             placeholder = {lang[langKey].gptSearchPlaceholder}></input>
            <button className="p-2 sm:p-4 md:p-4 m-2 bg-red-600 rounded-md text-white font-bold col-span-3 text-sm sm:text-sm md:text-lg" onClick={handleSearch} >
             {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
