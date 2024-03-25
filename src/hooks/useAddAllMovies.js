import React, {useEffect} from 'react'
import { API_OPTION } from '../utils/constant';
import { useDispatch} from "react-redux"
import { addPopularMovie, addTopRated , addUpComing} from '../utils/movieSlice';
import { useSelector } from "react-redux"
const useAddAllMovies = () => {
    const dispatch = useDispatch();

    const topRated = useSelector((store) => store.movie?.topRated);
    const popular = useSelector((store) => store.movie?.popular);
    const comming = useSelector((store) => store.movie?.upComing);



    const getTopRatedMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION);
        const json = await data.json();
        dispatch(addTopRated(json.results));
    }

    const getPopularMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTION);
        const json = await data.json();
        dispatch(addPopularMovie(json.results));
        console.log("getPopularMovie")
    }


    const getUpcomingMovie = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION);
        const json = await data.json();
        dispatch(addUpComing(json.results));
    }

 useEffect(() =>{
    if(!popular)
        getPopularMovies();
    if(!topRated)
        getTopRatedMovie();
    if(!comming)
        getUpcomingMovie();
 },[]);

}

export default useAddAllMovies
