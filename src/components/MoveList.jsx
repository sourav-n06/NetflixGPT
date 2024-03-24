import React from 'react'
import { MovieList_URl } from '../utils/constant'

const MoveList = ({path}) => {
  return (
    <div className="w-40 m-2  ">
      <img className='w-40 rounded-md' src = {MovieList_URl + path}/>
    </div>
  )
}

export default MoveList
