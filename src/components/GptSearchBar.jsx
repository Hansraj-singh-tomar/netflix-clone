import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
// import openai from '../utils/openai'
// import { API_OPTIONS } from '..//utils/constants'

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    // async function searchMovieTMDB(movie) {
    //     const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    //     const json = await data.json();
    //     return json.results;
    // }

    // async function handleGptSearchClick() {
    //     console.log(searchText.current.value);

    //     // Make an api call to GPT API and get Movie Results
    //     const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //         searchText.current.value +
    //         ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    //     const gptResults = await openai.chat.completions.create({
    //         messages: [{ role: 'user', content: gptQuery }],
    //         model: 'gpt-3.5-turbo',
    //     });

    //     if (!gptResults.choices) {
    //         // TODO: Write Error Handling
    //     }

    //     console.log(gptResults.choices[0].message.content);


    //     // ["Andaz Apna", "Hera Pheri", "Chup chupke", "Jaane Bhi Do Yaaro", "Padosan"]
    //     const gptMovies = gptResults.choices[0].message.content.split(",");

    //     const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    //     const tmdbResults = await Promise.all(promiseArray);
    //     console.log(tmdbResults);

    // }

    return (
        <div className='pt-[10%]'>
            <form action="" onSubmit={(e) => e.preventDefault()} className='bg-black p-6 w-1/2 m-auto text-center grid grid-cols-12'>
                <input type="text" name="" id="" placeholder={lang[langKey]?.getSearchPlaceholder} className='px-4 py-2 mr-2 col-span-9' />
                {/* <button ref={searchText} onClick={handleGptSearchClick} className='bg-red-700 px-4 py-2 col-span-3 rounded-lg text-white'>{lang[langKey]?.search}</button> */}
                <button ref={searchText} className='bg-red-700 px-4 py-2 col-span-3 rounded-lg text-white'>{lang[langKey]?.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar