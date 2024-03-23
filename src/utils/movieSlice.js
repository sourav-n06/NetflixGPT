import{createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movieList : null,
    },
    reducers: {
        addMovie: (state, action) => {
            state.movieList =  action.payload;
        },
    }
})

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;