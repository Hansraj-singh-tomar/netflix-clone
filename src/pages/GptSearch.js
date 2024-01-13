import React from 'react'
import { BG_IMG } from "../utils/constants"
import GptSearchBar from '../components/GptSearchBar'
import GptMovieSuggestion from '../components/GptMovieSuggestion'
const GptSearch = () => {
    return (
        <>
            <div className='fixed -z-10'>
                <img src={BG_IMG} alt="" />
            </div>
            <div>
                {/* GPT search bar */}
                <GptSearchBar />
                {/* GPT Movie suggestions */}
                <GptMovieSuggestion />
            </div>
        </>

    )
}

export default GptSearch