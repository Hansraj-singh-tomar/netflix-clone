import React from 'react'

const VidoeTitleCmp = ({ id, title, overview }) => {

    return (
        <div className='absolute aspect-video py-[15%] px-12 bg-gradient-to-r from-black'>
            <h1 className='text-white font-extrabold text-3xl mb-5'>{title}</h1>
            <p className='text-white w-4/12 mb-5 text-lg'>{overview}</p>
            <div>
                <button className='bg-white text-black px-6 py-2 mr-2 rounded-sm font-bold'>Play Now</button>
                <button className='bg-gray-500 text-white px-6 py-2 rounded-sm font-bold'>More Info</button>
            </div>
        </div>
    )
}

export default VidoeTitleCmp