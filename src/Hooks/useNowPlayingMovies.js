import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Redux/moviesSlice";

const useNowPlayingMovies = () => {
    const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlayingMovies)

    const dispatch = useDispatch();

    async function fetchData() {
        const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS)
        const data = await res.json();
        dispatch(addNowPlayingMovies(data?.results))
    }
    useEffect(() => {
        !nowPlayingMovies && fetchData();
    }, []);
}

export default useNowPlayingMovies;