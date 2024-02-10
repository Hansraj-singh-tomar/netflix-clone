import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

    const movies = useSelector((store) => store?.movies)

    return (
        // This will start after the main component
        <div className='bg-black'>
            {/* This will start from -mt-40 */}
            <div className='text-white pl-14 pr-5 relative -mt-40 z-20'>
                <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
                <MovieList title="Popular" movies={movies?.popularMovies} />
                <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
                <MovieList title="Upcoming Movies" movies={movies?.upComingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer