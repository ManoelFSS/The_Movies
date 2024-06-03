import React from 'react'
import { Home } from './pages/home/Home'
import {MovieDetails} from './pages/movie/MovieDetails'
import {Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/MovieDetails/:id" element={<MovieDetails/>}/>
    </Routes>
  )
}

export default App
