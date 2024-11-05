import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";
import trailerLinks from "./TrailerLinks";
export const MoviesContext = createContext();

const Context = (props) => {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    axios
      .get("/movies?type=movie")
      .then((data) => {
        console.log(data);
        const moviesData = data.data.data;
        console.log("fetched movies:", moviesData);
        const moviesWithTrailer = moviesData.map((movie) => ({
          ...movie,
          trailerURL: trailerLinks[movie._id] || null,
        }));
        setMovies(moviesWithTrailer);
      })
      .catch((err) => console.log(err));

      
  };

  console.log(movies);

  useEffect(() => {
    getMovies();

  }, []);


  return (
    <MoviesContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default Context;
