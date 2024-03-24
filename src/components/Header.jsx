import React from 'react'
import { NetflixImage } from '../utils/constant'

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-neutral-900 px-40 py-2 ">
      <img className="w-48  " src= {NetflixImage} alt="logo"/>
    </div>
  )
}

export default Header
