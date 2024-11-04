import React, { useContext } from 'react'
import bookmarkIcon from "./Assets/bookmark-icon.svg";
import { MoviesContext } from '../utils/Context';


function MovieCard({bookmarkedMovie, toggleBookmark}) {
  

  return (
    <div className="w-[290px] h-[230px] rounded-md bg-zinc-400 overflow-hidden">
      <div className="w-full h-[65%] overflow-hidden bg-top-left">
        <img
          className="h-full w-full object-cover object-top"
          src={bookmarkedMovie.Poster}
          alt=""
        />
      </div>
      <div className=" w-full flex-col gap-3 h-12">
        <h className="font-semibold">{bookmarkedMovie.Title}</h>
        <p className=" text-xs">
          Year:{bookmarkedMovie.Year} 
        </p>
      </div>
      <div className="flex justify-between gap-2 w-full p-1">
        <button className="hover:bg-green-600 duration-300 w-[45%] rounded-md p-2 text-xs bg-transparent border-[0.1em] border-zinc-400">
          <i class="ri-play-fill"></i>
          Play Trailor
        </button>
        <div className="w-[45%] items-center hover:bg-teal-600 rounded-md duration-300 text-xs p-2 bg-transparent border-[0.1em] border-zinc-400">
          <i class="ri-bookmark-fill"></i>
          <button className="" onClick={()=>toggleBookmark(bookmarkedMovie)}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard
