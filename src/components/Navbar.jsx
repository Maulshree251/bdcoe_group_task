import React, { useContext, useDeferredValue, useEffect, useState } from 'react'
import SearchIcon from './Assets/search-icon-white.svg'
import LightMode from './Assets/sun-purple.svg'
import LogoPurple from './Assets/tv-fill.svg'
import { Link } from 'react-router-dom'
import axios from '../utils/axios'  
import { MoviesContext } from '../utils/Context'


function Navbar() {
  const [movies, setMovies] = useContext(MoviesContext);
  const[text, setText] = useState("Search Movies")

  const changeText = (event) => {

    setText(event.target.value);
  }
  const searchMovies = (e) => {
      e.preventDefault();
      axios
        .get(`http://www.omdbapi.com/?s=${text}&apikey=71c9538f`)
        .then((response) => {
          console.log(response);
          setMovies(response.data.Search);
        });
  }

  
  return (
    <div className="w-[100%] h-[10%] flex items-center justify-around p-2  fixed text-white border-b-[0.1rem] border-zinc-400  bg-[#1F1E24]">
      <img src={LogoPurple} alt="" className="w-9 h-9 " />
      <ul className="flex gap-9  ">
        <li>
          <Link
            to="/"
            className="hover:bg-purple-700 cursor-pointer text-zinc-400 p-3 rounded-md duration-300 "
          >
            <i className="ri-home-9-fill"></i>Home
          </Link>
        </li>
        <li>
          <Link
            to="/bookmarkpage"
            className=" hover:bg-purple-700 cursor-pointer text-zinc-400 p-3 rounded-md duration-300"
          >
            <i className="ri-book-marked-fill"></i>Bookmarks
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className="hover:bg-purple-700 cursor-pointer text-zinc-400 p-3 rounded-md duration-300"
          >
            <i className="ri-book-open-fill"></i>About
          </Link>
        </li>
      </ul>

      <div className="flex justify-evenly gap-3 p-2  rounded-full ">
        <Link  className='hover:scale-150'>
          <img src={SearchIcon} alt="" onClick={searchMovies} />
        </Link>

        <input
          type="text"
          placeholder="Search Movies"
          name=""
          id=""
          className="bg-transparent border-none rounded-full placeholder: text-zinc-400 px-2  outline-none"
          onChange={changeText}
        />
      </div>

      <img src={LightMode} alt="" className="h-6 cursor-pointer hover:scale-125" />

      <div className="flex gap-3">
        <Link
          to="/MakeProfile"
          className="hover:bg-purple-700 cursor-pointer text-zinc-400 p-3 rounded-md duration-300"
        >
          Profile
        </Link>
        <Link
          to="/LoginSignup"
          className="hover:bg-purple-700 cursor-pointer text-zinc-400 p-3 rounded-md duration-300"
        >
          Login/Register
        </Link>
      </div>
    </div>
  );
}


export default Navbar
