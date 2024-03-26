import React from 'react'
import{createSlice} from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: 'GPT',
    initialState: {
        GptOption : false,
        GptMovies : null,
        GptMoviesNames : null,
        GptButton : false,
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
        addGptButton: (state, action) => {
            state.GptButton = !state.GptButton;
        }
    }
})

export const { addGtpStatus , addGptMovies, addGptButton} = GptSlice.actions;
export default GptSlice.reducer;
