import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen absolute bg-gradient-to-t from-black aspect-video '>
      <div className="w-2/6 pt-[25%] px-16">
          <div className="pt-36 px-8">
            <h2 className=" text-4xl font-bold mb-4 text-white">{title}</h2>
            <h5 className=" text-sm/[20px] text-white">{overview}</h5>
          </div>
          <div className="my-4 mx-2 px-4 ">
            <button className="m-2 px-8 py-2 text-black bg-white rounded-md font-bold hover:bg-opacity-80"><img 
            className="w-8 inline pr-2" src = "https://www.svgrepo.com/show/514197/play.svg"/> Play</button>
            <button className="m-2 bg-slate-300 px-6 py-2  bg-opacity-40 rounded-md text-white font-bold"><img 
             className = "w-6  inline pr-2" src = "https://www.svgrepo.com/show/69354/info.svg"/>More info</button>
          </div>

      </div>
    </div>
  )
}

export default VideoTitle
