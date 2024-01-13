import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);

    return (
        <div className='pt-[10%]'>
            <form action="" className='bg-black p-6 w-1/2 m-auto text-center grid grid-cols-12'>
                <input type="text" name="" id="" placeholder={lang[langKey]?.getSearchPlaceholder} className='px-4 py-2 mr-2 col-span-9' />
                <button className='bg-red-700 px-4 py-2 col-span-3 rounded-lg text-white'>{lang[langKey]?.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar