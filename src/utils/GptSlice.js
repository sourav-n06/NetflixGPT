import React from 'react'
import{createSlice} from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: 'GPT',
    initialState: {
        GptOption : false,
    },
    reducers: {
        addGtpStatus: (state, action) => {
            state.GptOption = !state.GptOption;
        },
    }
})

export const { addGtpStatus } = GptSlice.actions;
export default GptSlice.reducer;
