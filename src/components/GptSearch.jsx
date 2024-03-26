import React from 'react'
import GptSearchBar from './GptSearchBar'
import GtpMovieSuguestion from './GtpMovieSuguestion'
import { BG_URl } from '../utils/constant'
import { useSelector } from "react-redux"
import VideoShimmer1 from './VideoShimmer1'


const GptSearch = () => {
  const showShimmer = useSelector((store) => store.gpt.GptButton);
  const { GptMoviesNames } = useSelector((store) => store.gpt);

  return (
    <div>
      <div className= "w-screen h-screen" style={{backgroundImage: `url(${BG_URl})`}}>
            <GptSearchBar/>
            {showShimmer && !GptMoviesNames ?<VideoShimmer1/> : <GtpMovieSuguestion/>}
      </div>
      
    </div>
  )
}

export default GptSearch
