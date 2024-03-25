import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import {useDispatch} from 'react-redux'
import { addMovie } from "../utils/movieSlice";
import { useSelector} from "react-redux"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlaying = useSelector((store) => store.movie?.movieList);

    const nowPlayingMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION)
        const json = await data.json();
        console.log(json.results);
        dispatch(addMovie(json.results))
      }
    
      useEffect(() =>{
        !nowPlaying && nowPlayingMovie();
      },[]);
    
};

export default useNowPlayingMovies;