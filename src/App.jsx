import { useState } from 'react'
import './App.css'
import LoginSignup from './components/loginSignup/loginSignup'
import MovieCard from './components/movieCard' 
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MakeProfile from './components/makeProfile'


function App() {
  

  return (
    <div className=" bg-#1F1E24 w-screen h-screen flex-col overflow-x-hidden">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LoginSignup' element={<LoginSignup />} />
        <Route path='/MakeProfile' element={<MakeProfile />} />

      </Routes>
      
      
    </div>
  );
}

export default App
