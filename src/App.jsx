import { useEffect, useState } from 'react'
import './App.css'
import LoginSignup from './components/loginSignup/LoginSignup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MakeProfile from './components/MakeProfile'
import BookmarkPage from './components/BookmarkPage'
import Trailer from './components/Trailer'
import About from './components/About'


function App() {

  const [isLighttheme, setIsLighttheme] = useState(false);

  useEffect(() => {
    document.body.className = isLighttheme ? "light-bg" : "dark-bg";
  }, [isLighttheme]);


  const[bookmarks, setBookmarks] = useState(()=>{

    const savedBookmarks = localStorage.getItem('bookmark');
    return savedBookmarks? JSON.parse(savedBookmarks): [];
  });

  useEffect(()=>{
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  },[bookmarks]);

  function toggleBookmarks(clickedMovies) {
      setBookmarks((prevBookmarks)=>{
         if(prevBookmarks.some((b)=> b.id === clickedMovies.id)){
          return prevBookmarks.filter((b)=> b.id !== clickedMovies.id)
         }
         else{
          return [...prevBookmarks, clickedMovies]
         }
         
      });
      console.log(clickedMovies);
  };
 

  return (
    <><div className=" bg-#1F1E24 w-screen h-screen flex-col overflow-x-hidden">
      <Navbar isLighttheme={isLighttheme} setIsLighttheme={setIsLighttheme} />
   
      <Routes>
        <Route
          path="/"
          element={
            <Home bookmarks={bookmarks} toggleBookmarks={toggleBookmarks} />
          }
        />
        <Route path="/LoginSignup" element={<LoginSignup isLighttheme={isLighttheme}/>} />
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
        <Route path='/About' element={<About isLighttheme={isLighttheme}/> }/>
      </Routes>
      </div>
      </>
    
  
  );
}

export default App
