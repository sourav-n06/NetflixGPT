import React from 'react'
import {useSelector} from "react-redux"
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';
import VideoShimmer from './VideoShimmer';
const MainContainer = () => {
    const movies = useSelector((store) => store.movie?.movieList)

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    if(!movies) return <VideoShimmer/>;

    const randomNumber = getRandomNumber(0, movies?.length-1);
    console.log(randomNumber)
    const movie = movies[randomNumber];
    const { original_title, overview, id } = movie;

  return (
    <div className='pt-14 bg-black sm:bg-black sm:pt-14 md:pt-0'>
      <VideoTitle title = {original_title} overview={overview} id = {id}/>
      <VideoBackGround movId = {id}/>
    </div>
  )
}

export default MainContainer
