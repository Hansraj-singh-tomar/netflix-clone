import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

    const movies = useSelector((store) => store?.movies)

    return (
        <div className='bg-black'>

            <div className='text-white pl-14 pr-5 relative -mt-40 z-20'>
                <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
                <MovieList title="Trending" movies={movies?.nowPlayingMovies} />
                <MovieList title="Hrror" movies={movies?.nowPlayingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer