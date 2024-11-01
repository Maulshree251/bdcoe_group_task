import React, { useContext } from 'react'
import bookmarkIcon from "./Assets/bookmark-icon.svg";
import { MoviesContext } from '../utils/Context';


function MovieCard() {
   

  return (
    <div className="w-[290px] h-[200px] rounded-md bg-zinc-400 overflow-hidden">
      <div className="w-full h-[50%] overflow-hidden bg-top-left">
        <img
          className="h-full w-full object-cover"
          src={movies.Poster}
          alt=""
        />
      </div>
      <div className=" w-full flex-col gap-3">
        <h className="font-semibold">{movies.Title}</h>
        <p className=" text-xs">
          Year:{movies.Year} 
        </p>
      </div>
      <div className="flex justify-between gap-2 w-full p-2 pb-3">
        <button className="hover:bg-green-600 duration-300 w-[45%] rounded-md p-2 text-xs bg-transparent border-[0.1em] border-zinc-400">
          <i class="ri-play-fill"></i>
          Play Trailor
        </button>
        <div className="w-[45%] items-center hover:bg-teal-600 rounded-md duration-300 text-xs p-2 bg-transparent border-[0.1em] border-zinc-400">
          <i class="ri-bookmark-fill"></i>
          <button className="">Bookmark</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard
