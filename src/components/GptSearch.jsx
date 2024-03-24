import React from 'react'
import GptSearchBar from './GptSearchBar'
import GtpMovieSuguestion from './GtpMovieSuguestion'
import { BG_URl } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
      <div className= "w-screen h-screen " style={{backgroundImage: `url(${BG_URl})`}}>
            <GptSearchBar/>
            <GtpMovieSuguestion/>
      </div>
      
    </div>
  )
}

export default GptSearch
