import React from 'react'
import {useSelector} from "react-redux"
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';
const MainContainer = () => {

    const movies = useSelector((store) => store.movie?.movieList)
    
    if(!movies) return ;
    const movie = movies[16];
    const { original_title, overview, id } = movie;

    console.log(movies[0]);
    console.log(original_title, overview, id);

  return (
    <div className=''>
      <VideoTitle title = {original_title} overview={overview}/>
      <VideoBackGround movId = {id}/>
    </div>
  )
}

export default MainContainer
