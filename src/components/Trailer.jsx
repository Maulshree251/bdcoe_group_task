import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { MoviesContext } from './Context';

const Trailer = () => {

    const [movies] = useContext(MoviesContext);

    const { _id } = useParams();
    const trailermovie = movies.find(mv => mv._id === _id);
    console.log("found movie:", trailermovie)

  return (
    <div className="mt-[5%] ml-5 mr-5 flex flex-col">
      <h1 className="text-white font-semibold font-serif text-lg bg-[#bb30b9]">
        {trailermovie?.title} Trailer
      </h1>
      <div className="mt-2 w-full h-fit object-center">
        {trailermovie?.trailerURL ? (
          <iframe
            width="560"
            height="315"
            src={trailermovie.trailerURL}
            title={`${trailermovie.title} Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[550px]"
          ></iframe>
        ) : (
          <p className="text-white"> No Trailer Available</p>
        )}
      </div>
    </div>
  );
}

export default Trailer
