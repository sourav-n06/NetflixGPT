import React from 'react'
import { MovieList_URl } from '../utils/constant'

const MoveList = ({path}) => {
  if (!path) return null;
  return (
    <div className="w-32  sm:w-36 md:w-40 lg:w-46 m-2 cursor-pointer hover:scale-90 transition-all">
      <img className='w-32 h-48 sm:w-36 sm:h-52 md:w-40 md:h-56 lg:w-46 rounded-md' src = {MovieList_URl + path}/>
    </div>
  )
}

export default MoveList
