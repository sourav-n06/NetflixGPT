import{createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movieList : null,
        movieTrailer : null,
        popular : null,
        topRated : null,
        upComing : null,
        PlayVideo : null,
    },
    reducers: {
        addMovie: (state, action) => {
            state.movieList =  action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        },
        addPopularMovie: (state, action) =>{
            state.popular = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        },
        addUpComing: (state, action) => {
            state.upComing = action.payload;
        },
        addPlayVideo: (state, action) =>{
            state.PlayVideo = action.payload;
        }
    }
})

export const { addMovie, addMovieTrailer, addPopularMovie, addTopRated, addUpComing ,addPlayVideo} = movieSlice.actions;
export default movieSlice.reducer;