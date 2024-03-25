import React from 'react'
import { MovieList_URl } from '../utils/constant'

const MoveList = ({path}) => {
  if (!path) return null;
  return (
    <div className="w-40 m-2 cursor-pointer hover:scale-90 transition-all">
      <img className='w-40 h-56 rounded-md' src = {MovieList_URl + path}/>
    </div>
  )
}

export default MoveList
