import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../Redux/moviesSlice";

const useTopRated = () => {

    const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);

    const dispatch = useDispatch();

    async function fetchData() {
        const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
        const data = await res.json();
        dispatch(addTopRatedMovies(data?.results))
    }

    useEffect(() => {
        !topRatedMovies && fetchData();
    }, [])
}

export default useTopRated;