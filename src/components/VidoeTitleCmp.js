import React from 'react'

const VidoeTitleCmp = ({ id, title, overview }) => {

    return (
        <div className='absolute aspect-video py-[5%] md:py-[15%] px-4 md:px-12 bg-gradient-to-r from-black'>
            <h1 className='text-white font-extrabold md:text-2xl lg:text-3xl mb-2 md:mb-5'>{title}</h1>
            <p className='text-white w-6/12 md:w-4/12 lg:w-4/12 mb-2 md:mb-5 text-xs md:text-sm lg:text-lg'>{overview.slice(0, 250)}</p>
            <div>
                <button className='bg-white text-black px-2 md:px-6 py-1 md:py-2 mr-2 rounded-sm text-sm md:font-bold'>Play Now</button>
                <button className='bg-gray-500 text-white px-2 md:px-6 py-1 md:py-2 rounded-sm text-sm md:font-bold'>More Info</button>
            </div>
        </div>
    )
}

export default VidoeTitleCmp