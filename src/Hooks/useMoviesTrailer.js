import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../Redux/moviesSlice";
const useMoviesTrailer = (movieId) => {

    const trailerVideo = useSelector((store) => store.movies.trailerVideos);

    const dispatch = useDispatch();

    async function fetchMovieTrailer(movieId) {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        const data = await res.json();
        const filteredData = data.results.filter((movie) => movie?.type === "Trailer")
        const trailer = filteredData?.length ? filteredData?.[0] : data?.results[0]
        dispatch(addTrailerVideos(trailer));
    }

    useEffect(() => {
        !trailerVideo && fetchMovieTrailer(movieId);
    }, [])
}

export default useMoviesTrailer;