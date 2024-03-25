import React from 'react'
import { API_OPTION } from '../utils/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector} from 'react-redux';
import { addMovieTrailer } from '../utils/movieSlice';
import VideoShimmer from './VideoShimmer';


const VideoBackGround = ({movId}) => {

        const dispatch = useDispatch();
        const trailer = useSelector((store) => store.movie?.movieTrailer)

        const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movId+'/videos?language=en-US', API_OPTION)

        const json = await data.json();
        console.log(json);

        const filterData = json.results.filter((video) => video.type === 'Trailer');
        const Trailer = filterData.length > 0 ? filterData[0] : json.results[0];
        dispatch(addMovieTrailer(Trailer));
        console.log(Trailer,"frgeg");
    }

    useEffect(() =>{
      !trailer && getMovieVideo();
    },[]);
    if(trailer === null) return <VideoShimmer/>
    
  return (
    <div className="w-screen  ">
      <iframe className="w-screen  aspect-video " src={"https://www.youtube.com/embed/"+ trailer?.key +"?si=-SmmOojARPeuDffW&amp;?start=15?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackGround
