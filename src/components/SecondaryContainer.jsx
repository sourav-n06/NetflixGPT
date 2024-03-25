import React from 'react'
import { useSelector } from "react-redux";
import MovieCart from './MovieCart';
const SecondaryContainer = () => {
  const movies = useSelector( (store) => store.movie);

  return (
    <div className="bg-black">
      <div className=" relative pt-5 sm:-mt-8 md:-mt-24 lg:-mt-[15%] ">
          <MovieCart title = {"Now playing"} movies ={movies?.movieList}/>
          <MovieCart title = {"Top rated movies"} movies ={movies?.topRated}/>
          <MovieCart title = {"Popular movies"} movies ={movies?.popular}/>
          <MovieCart title = {"Up coming movies"} movies ={movies?.upComing}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
