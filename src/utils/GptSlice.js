import React from 'react'
import{createSlice} from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: 'GPT',
    initialState: {
        GptOption : false,
        GptMovies : null,
        GptMoviesNames : null,
    },
    reducers: {
        addGtpStatus: (state, action) => {
            state.GptOption = !state.GptOption;
        },
        addGptMovies : (state, action) => {
            const { resultMovies, MovieNames } = action.payload;
            state.GptMovies = resultMovies;
            state.GptMoviesNames = MovieNames;
        },
    }
})

export const { addGtpStatus , addGptMovies} = GptSlice.actions;
export default GptSlice.reducer;
