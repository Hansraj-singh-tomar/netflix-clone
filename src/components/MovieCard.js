import React from 'react'
import { CARD_IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
        <img className='w-24 md:w-36 pr-2' src={`${CARD_IMG_CDN_URL}${posterPath}`} alt="" />
    )
}

export default MovieCard