import{createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movieList : null,
        movieTrailer : null
    },
    reducers: {
        addMovie: (state, action) => {
            state.movieList =  action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        }
    }
})

export const { addMovie, addMovieTrailer } = movieSlice.actions;
export default movieSlice.reducer;