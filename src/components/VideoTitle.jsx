import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen absolute bg-gradient-to-t from-black aspect-video '>
      <div className="px-6 w-4/6   pt-[7%] sm:w-full sm:pt-[5%] md:pt-[5%] lg:pt-[10%] md:px-16 md:w-3/6 lg:w-2/6">
          <div className=" pt-12 sm:pt-24 md:pt-24 lg:pt-36 md:px-8">
            <h2 className="text-lg sm:text-xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
            <h5 className="hidden sm:hidden md:hidden lg:inline-block text-sm-[16px] text-white">{overview}</h5>
          </div>
          <div className="my-4 sm:mx-2  md:mx-2 md:px-4 flex items-center">
            <button className="w-24 px-2 md:m-2 sm:w-32 md:px-8 py-2 md:w-32 text-black bg-white rounded-md font-bold hover:bg-opacity-80"><img 
            className="w-[24px] md:w-[24px] inline pr-2" src = "https://www.svgrepo.com/show/514197/play.svg"/> Play</button>
            <button className="m-2 bg-slate-300 px-2 py-2 md:py-[9px]  bg-opacity-30 rounded-md text-white font-bold"><img 
             className = "hidden md:w-8  md:inline pr-2 " src = "https://www.svgrepo.com/show/69354/info.svg"/>More info</button>
          </div>

      </div>
    </div>
  )
}

export default VideoTitle
