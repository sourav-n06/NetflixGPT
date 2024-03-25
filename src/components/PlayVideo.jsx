import React, { useEffect } from 'react'
import {Link, useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { addPlayVideo } from '../utils/movieSlice';
import { API_OPTION, NetflixImage } from '../utils/constant';
const PlayVideo = () => {
const { id } = useParams();
        const dispatch = useDispatch();
        const trailer = useSelector((store) => store.movie?.PlayVideo)

        const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_OPTION)

        const json = await data.json();
        console.log(json);

        const filterData = json.results.filter((video) => video.type === 'Trailer');
        const Trailer = filterData.length > 0 ? filterData[0] : json.results[0];
        dispatch(addPlayVideo(Trailer));
        }

        useEffect(() =>{
             getMovieVideo();
        },[]);

  return (
    <div>
        <div className="px-16 bg-gradient-to-b from-neutral-900 md:bg-gradient-to-b from-neutral-900 md:px-40 py-2 flex justify-between absolute w-screen">
        <img className="hidden sm:inline-block md:inline-block w-48 " src= {NetflixImage} alt="logo"/>
        <img className=" w-6 inline-block sm:hidden  md:hidden " src= "https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg"/>
          <Link to ={ "/browse"}><button className="mt-2 mr-2 bg-violet-700 text-white px-2 sm:mt-2 lg:mt-4 rounded-md py-1">Home</button></Link>
       </div>
      <iframe className="w-screen h-screen aspect-video " src={"https://www.youtube.com/embed/"+ trailer?.key +"?si=-SmmOojARPeuDffW&amp;?start=15?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default PlayVideo
