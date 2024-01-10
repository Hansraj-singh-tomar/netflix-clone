import React, { useRef } from 'react'
import MovieCard from './MovieCard'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
<style>

</style>

const MovieList = ({ title, movies }) => {

    let boxRef = useRef();

    function prevSlide() {
        let width = boxRef.current.clientWidth;
        boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
    }

    function nextSlide() {
        let width = boxRef.current.clientWidth;
        boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
    }

    return (
        <div className='pb-6 w-full relative'>
            <h1 className='text-bold text-lg'>{title}</h1>
            <div ref={boxRef} className='flex w-full overflow-hidden transition ease-out duration-400 scroll-smooth'>
                {
                    movies?.map((movie) => <MovieCard key={movie?.id} posterPath={movie?.poster_path} />)
                }
            </div>
            <div className='absolute top-0 h-full w-full flex justify-between items-center text-3xl'>
                <button onClick={prevSlide} className='p-1 bg-gray-600 text-white h-10 rounded-full text-center'><FaChevronLeft /></button>
                <button onClick={nextSlide} className='p-1 bg-gray-600 text-white h-10 rounded-full text-center'><FaChevronRight /></button>
            </div>
        </div>
    )
}

export default MovieList