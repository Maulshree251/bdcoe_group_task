import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6 mt-[5%]">
      <div className="w-full max-w-3xl  text-zinc-300 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-zinc-300 mb-4 text-center">
          About Us
        </h1>
        <p className="text-lg text-zinc-300  mb-6 text-center">
          Welcome to <span className="font-semibold">BDCOE || Movie App</span>!
          We’re passionate about connecting you with movies you'll love. Whether
          you're in the mood for a blockbuster or an indie film, we’ve got you
          covered.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-300  mt-6 mb-3">
          Our Mission
        </h2>
        <p className="text-zinc-300  mb-4">
          Our mission is to make movie discovery easy, fun, and personalized. We
          strive to bring you recommendations that fit your unique taste,
          helping you discover movies that are just right for your mood.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-300  mt-6 mb-3">
          Why Choose Us?
        </h2>

        <div className="mb-4">
         
          <p className="text-zinc-300 ">
            The Movie Recommendations Website is a user-friendly platform that
            allows individuals to sign in or sign up using their email/password
            or Google accounts. Users can create personalized profiles, watch
            trailers for selected movies, and bookmark their favorites for easy
            access. Website has a very interactive interface allowing users to
            also watch movies according to various categories, genres, cast,
            etc. The site feature search function to help users find movies by
            using machine learning algorithms to analyze user preferences and
            suggest tailored movie recommendations, enhancing the overall
            viewing experience. This project aims to combine accessibility,
            personalization, and entertainment in a seamless digital
            environment.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-zinc-300  mt-6 mb-3">
          Join Our Community
        </h2>
        <p className="text-zinc-300 ">
          Join <span className="font-semibold">BDCOE || Movie App</span> and
          connect with fellow movie lovers. Share your recommendations, explore
          new genres, and become part of a community passionate about cinema.
        </p>

        <div className="text-center mt-8">
          <p className="text-zinc-300  italic">
            Thank you for choosing{" "}
            <span className="font-semibold">BDCOE || Movie App</span> as your
            movie guide. Let’s make your cinematic journey unforgettable!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
