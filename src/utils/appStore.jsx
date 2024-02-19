import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "./mediaListSlice";
import playListReducer from "./playListSlice";

const appStore = configureStore({
    reducer:{
        media : mediaReducer,
        videoPlayList :  playListReducer,
    }
})

export default appStore ; 