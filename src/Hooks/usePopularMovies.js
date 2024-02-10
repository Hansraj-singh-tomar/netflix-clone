import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPopularMovies } from "../Redux/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
    const popularMovies = useSelector((store) => store?.movies?.popularMovies);

    const dispatch = useDispatch();

    async function fetchData() {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
        const data = await res.json();
        dispatch(addPopularMovies(data?.results))
    }

    useEffect(() => {
        !popularMovies && fetchData();
    }, [])
}

export default usePopularMovies;