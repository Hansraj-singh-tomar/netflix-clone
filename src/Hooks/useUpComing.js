import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../Redux/moviesSlice";

const useUpComing = () => {

    const upComingMovies = useSelector((store) => store?.movies?.upComingMovies)

    const dispatch = useDispatch();

    async function fetchData() {
        const res = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
        const data = await res.json();
        dispatch(addUpComingMovies(data?.results));
    }

    useEffect(() => {
        !upComingMovies && fetchData();
    }, [])
}

export default useUpComing;