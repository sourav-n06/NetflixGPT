import React from 'react'
import { useSelector } from "react-redux"
import MovieCart from './MovieCart';
import { BG_URl } from '../utils/constant';
import VideoShimmer from './VideoShimmer';

const GtpMovieSuguestion = () => {
  const { GptMovies, GptMoviesNames } = useSelector((store) => store.gpt);
  if(!GptMoviesNames) return null;
  return (
    <div className="" style={{backgroundImage: `url(${BG_URl})`}} >
        <div className="mt-6 sm:p-2 sm:m-2 md:p-4 md:m-4 bg-black bg-opacity-80" >
          {
            GptMoviesNames.map((movieName, index) => 
                <MovieCart key= {movieName} title= {movieName} movies = {GptMovies[index]}/>
            )
          }
        </div>
    </div>
  )
}

export default GtpMovieSuguestion
