import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";
export const MoviesContext = createContext();

const Context = (props) => {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    axios
      .get("/movies?type=movie"
      )
      .then((data) => {
        console.log(data);
        setMovies(data.data.data);
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
