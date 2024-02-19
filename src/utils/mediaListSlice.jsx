import { createSlice } from "@reduxjs/toolkit";

const mediaListSlice = createSlice({
    name:"media",
    initialState:{
        videos : null , 
        searchVideos : null
    },
    reducers: {
        addVideos: (state, action) => {
          state.videos = action.payload;
        },
        addSearchVideos: (state, action) => {
            state.searchVideos = action.payload;
          },
    }
});
export const {addVideos , addSearchVideos} = mediaListSlice.actions;

export default mediaListSlice.reducer;