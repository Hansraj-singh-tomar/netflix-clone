import React from 'react'
import Header from '../components/Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from '../components/MainContainer';
import SecondaryContainer from '../components/SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    useNowPlayingMovies();


    return (
        <div>
            <Header />
            {
                showGptSearch ? <GptSearch /> :
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
            }
        </div>
    )
}

export default Browse