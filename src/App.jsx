import { useEffect, useState } from 'react'
import './App.css'
import LoginSignup from './components/loginSignup/LoginSignup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MakeProfile from './components/makeProfile'
import BookmarkPage from './components/BookmarkPage'
import Trailer from './components/Trailer'
import About from './components/About'


function App() {
  const[bookmarks, setBookmarks] = useState(()=>{

    const savedBookmarks = localStorage.getItem('bookmark');
    return savedBookmarks? JSON.parse(savedBookmarks): [];
  });

  useEffect(()=>{
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  },[bookmarks]);

  function toggleBookmarks(clickedMovies) {
      setBookmarks((prevBookmarks)=>{
         if(prevBookmarks.some((b)=> b.imdbID === clickedMovies.imdbID)){
          return prevBookmarks.filter((b)=> b.imdbID !== clickedMovies.imdbID)
         }
         else{
          return [...prevBookmarks, clickedMovies]
         }
         
      });
      console.log(clickedMovies);
  };
 

  return (
    <><div className=" bg-#1F1E24 w-screen h-screen flex-col overflow-x-hidden">
      <Navbar />
   
      <Routes>
        <Route
          path="/"
          element={
            <Home bookmarks={bookmarks} toggleBookmarks={toggleBookmarks} />
          }
        />
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/MakeProfile" element={<MakeProfile />} />
        <Route
          path="/bookmarkpage"
          element={
            <BookmarkPage
              bookmarks={bookmarks}
              toggleBookmarks={toggleBookmarks}
            />
          }
        />
        <Route path='/Trailer' element={<Trailer /> }/>
        <Route path='/About' element={<About /> }/>
      </Routes>
      </div>
      </>
    
  
  );
}

export default App
