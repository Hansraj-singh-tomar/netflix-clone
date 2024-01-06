import React from 'react'
import Header from '../components/Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from '../components/MainContainer';


const Browse = () => {
    useNowPlayingMovies();

    return (
        <div className='relative'>
            <Header />
            <MainContainer />
        </div>
    )
}

export default Browse