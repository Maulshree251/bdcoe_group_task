import React from 'react'


const BookmarkPage = ({bookmarks, toggleBookmarks}) => {

  
  return (
    <div className="mt-[5%]  flex flex-col gap-6">
      <h1 className="bg-zinc-500 p-4 text-white text-xl font-semibold">
        Bookmarks
      </h1>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet!</p>
      ) : (
        <div className=" ml-6 flex flex-wrap gap-4">
          {bookmarks.map((bookmarkedMovie) => (
            <div className="w-[290px]  rounded-md bg-zinc-400 overflow-hidden">
              <div className="w-full h-[170px] overflow-hidden bg-top-left">
                <img
                  className="h-full w-full object-cover object-top"
                  src={bookmarkedMovie.poster}
                  alt=""
                />
              </div>
              <div className=" w-full flex-col gap-3 h-11 overflow-hidden">
                <h className="font-semibold">{bookmarkedMovie.title}</h>
                <p className=" text-xs">Year:{bookmarkedMovie.year}</p>
              </div>
              <div className="flex justify-between gap-2 w-full p-1">
                <button className="hover:bg-green-600 duration-300 w-[45%] rounded-md p-2 text-xs bg-transparent border-[0.1em] border-zinc-400">
                  <i class="ri-play-fill"></i>
                  Play Trailor
                </button>
                <div className="w-[45%] items-center hover:bg-teal-600 rounded-md duration-300 text-xs p-2 bg-transparent border-[0.1em] border-zinc-400">
                  <i class="ri-bookmark-fill"></i>
                  <button
                    className=""
                    onClick={() => toggleBookmarks(bookmarkedMovie)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookmarkPage
