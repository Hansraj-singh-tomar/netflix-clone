import React from 'react'
import { BG_IMG } from "../utils/constants"
import GptSearchBar from '../components/GptSearchBar'
import GptMovieSuggestion from '../components/GptMovieSuggestion'
const GptSearch = () => {
    return (
        <>
            <div className='fixed -z-10'>
                <img className='w-screen h-screen aspect-video object-cover' src={BG_IMG} alt="" />
            </div>
            <div className='pt-[40%] md:pt-[20%] lg:pt-[10%]'>
                {/* GPT search bar */}
                <GptSearchBar />
                {/* GPT Movie suggestions */}
                <GptMovieSuggestion />
            </div>
        </>

    )
}

export default GptSearch