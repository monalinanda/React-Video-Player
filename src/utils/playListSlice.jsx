import { createSlice } from "@reduxjs/toolkit";

const storedVideosJSON = localStorage.getItem('newPlayListArray');
const storedVideos = JSON.parse(storedVideosJSON);
const playListSlice = createSlice({
    name:"videoPlayList",
    initialState:{
        playlist : storedVideos ? storedVideos : [],
    },
    reducers: {
        addVideoPlayList: (state, action) => {
          state.playlist = action.payload;
        },
    }
});
export const {addVideoPlayList} = playListSlice.actions;

export default playListSlice.reducer;