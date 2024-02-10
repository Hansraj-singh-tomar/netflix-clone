import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        trailerVideos: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTrailerVideos: (state, action) => {
            state.trailerVideos = action.payload;
        }
    }
})

export default moviesSlice.reducer;
export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpComingMovies, addTrailerVideos } = moviesSlice.actions;