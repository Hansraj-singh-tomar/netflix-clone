import React from 'react'
import Header from '../components/Header'
import MainContainer from '../components/MainContainer';
import SecondaryContainer from '../components/SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRated from '../Hooks/useTopRated';
import useUpComing from '../Hooks/useUpComing';

const Browse = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRated();
    useUpComing();


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