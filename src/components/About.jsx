import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6 mt-[5%]">
      <div className="w-full max-w-3xl  text-zinc-300 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-zinc-300 mb-4 text-center">
          About Us
        </h1>
        <p className="text-lg text-zinc-300  mb-6 text-center">
          Welcome to <span className="font-semibold">[Your Website Name]</span>!
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
          <h3 className="text-xl font-semibold text-zinc-300 ">
            Personalized Recommendations
          </h3>
          <p className="text-zinc-300 ">
            Our recommendation engine combines data-driven algorithms with user
            feedback to suggest movies tailored to your tastes. The more you
            interact, the more our system understands your preferences.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-zinc-300 ">
            Curated Lists & Trending Picks
          </h3>
          <p className="text-zinc-300 ">
            Discover handpicked movie lists that match different genres, moods,
            and themes. Stay updated with the latest trends and popular releases
            in the movie world.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-zinc-300 ">
            User Ratings and Reviews
          </h3>
          <p className="text-zinc-300 ">
            Read honest reviews and ratings from other users, or share your
            thoughts to help others find their next great watch.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-zinc-300 ">
            Advanced Search Filters
          </h3>
          <p className="text-zinc-300 ">
            Filter by genre, director, year, or theme to find the exact type of
            movie you’re in the mood for.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-zinc-300  mt-6 mb-3">
          Join Our Community
        </h2>
        <p className="text-zinc-300 ">
          Join <span className="font-semibold">[Your Website Name]</span> and
          connect with fellow movie lovers. Share your recommendations, explore
          new genres, and become part of a community passionate about cinema.
        </p>

        <div className="text-center mt-8">
          <p className="text-zinc-300  italic">
            Thank you for choosing{" "}
            <span className="font-semibold">[Your Website Name]</span> as your
            movie guide. Let’s make your cinematic journey unforgettable!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
