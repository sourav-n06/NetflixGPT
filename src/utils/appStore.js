import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import movieReducer from './movieSlice';
import GptReducer from "./GptSlice";
import configReducer from "./configSlice";
const appStore = configureStore(
    {
        reducer : {
            user : userReducer,
            movie : movieReducer,
            gpt : GptReducer,
            config : configReducer
        }
    }
)

export default appStore;