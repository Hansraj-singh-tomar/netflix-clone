import React from 'react'

import useMoviesTrailer from '../Hooks/useMoviesTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store?.movies?.trailerVideos);
    console.log(trailerVideo);
    useMoviesTrailer(movieId);

    return (
        <div className='w-full absolute top-0 left-0'>
            <iframe
                className='w-full aspect-video overflow-x-hidden'
                src={`https://www.youtube.com/embed/${trailerVideo?.key}/?&autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            >
            </iframe>
        </div>
    )
}

export default VideoBackground