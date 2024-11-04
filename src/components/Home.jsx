import React, { useContext } from 'react'
import Navbar from './Navbar'
import { MoviesContext } from '../utils/Context'
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const Home = ({bookmarks, toggleBookmarks}) => {
    
    const [movies] = useContext(MoviesContext);
    console.log(movies);

    

  return movies ? (
    <div className="w-full mt-[5%] flex flex-wrap gap-5 ml-10 p-5 overflow-x-hidden overflow-y-auto  ">
      {movies.map((m) => (
        <div key={m.imdbID} className="w-[290px] h-[230px] rounded-md bg-zinc-400 overflow-hidden hover:scale-110 duration-300">
          <div className="w-full h-[65%] overflow-hidden bg-top-left">
            <img
              className="h-full w-full object-cover  object-top"
              src={m.Poster}
              alt=""
            />
          </div>
          <div className=" w-full flex-col gap-3 h-11">
            <h3 className="pt-1 font-semibold leading-none">{m.Title}</h3>
            <p className=" text-xs">Year:{m.Year}</p>
          </div>
          <div className="flex justify-between gap-2 w-full px-1">
            <button className="hover:bg-green-600 duration-300 w-[45%] rounded-md p-2 text-xs bg-transparent border-[0.1em] border-zinc-400" >
              <i className="ri-play-fill"></i>
              Play Trailor
            </button>
            <div
              className="w-[45%] items-center hover:bg-teal-600 rounded-md duration-300 text-xs p-2 bg-transparent border-[0.1em] border-zinc-400"
              
            >
              <i className="ri-bookmark-fill"></i>
              <button className="" onClick={()=>toggleBookmarks(m)}>
                {bookmarks.some((b)=> b.imdbID === m.imdbID)? "Bookmarked" : "Bookmark"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <Loading />
  );}

export default Home
