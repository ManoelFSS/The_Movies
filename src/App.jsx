import React from 'react'
import {Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import {MovieDetails} from './pages/movie/MovieDetails'
import { Search } from './pages/search/Search'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/MovieDetails/:id" element={<MovieDetails/>}/>
      <Route path="/Search" element={<Search/>}/>
    </Routes>
  )
}

export default App
