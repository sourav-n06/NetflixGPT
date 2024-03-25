import React from 'react'
import {Link} from "react-router-dom"
const VideoTitle = ({title, overview ,id}) => {
  return (
    <div className='w-screen  absolute bg-gradient-to-t from-black aspect-video '>
      <div className="px-6 w-4/6 pt-[20%] sm:pt-[20%] md:pt-[20%] lg:pt-[25%] lg:w-3/6 lg:pl-16">
          <div className="">
            <h2 className="text-lg sm:text-xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
            <h5 className="hidden sm:hidden md:hidden lg:inline-block text-sm-[16px] text-white">{overview}</h5>
          </div>
          <div className="pt-4 flex items-center">
            <Link to={"/browse/" + id}>
                  <button className=" mr-2 w-24 px-2  sm:w-32 md:px-8 py-2 md:w-32 text-black bg-white rounded-md font-bold hover:bg-opacity-80"><img 
                  className="w-[24px] md:w-[24px] inline pr-2" src = "https://www.svgrepo.com/show/514197/play.svg"/> Play</button>
            </Link>
            <button className="mr-2 hidden bg-slate-300 px-2 py-2 md:py-[9px] lg:py-[7px]  sm:inline-block md:inline-block lg:inline-block   bg-opacity-30 rounded-md text-white font-bold"><img 
             className = "hidden md:w-8  sm:w-6 sm:inline-block md:inline-block pr-2 " src = "https://www.svgrepo.com/show/69354/info.svg"/>More info</button>
          </div>

      </div>
    </div>
  )
}

export default VideoTitle
