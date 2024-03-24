import React from 'react'
import {useSelector} from "react-redux"
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';
const MainContainer = () => {
    const movies = useSelector((store) => store.movie?.movieList)

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    if(!movies) return ;

    const randomNumber = getRandomNumber(0, movies.length-1);
    console.log(randomNumber)
    const movie = movies[randomNumber];
    const { original_title, overview, id } = movie;

  return (
    <div className=''>
      <VideoTitle title = {original_title} overview={overview}/>
      <VideoBackGround movId = {id}/>
    </div>
  )
}

export default MainContainer
