import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios"

// Criando o contexto
const MoviesContext = createContext();

// Provedor do contexto
export const MoviesContextProvider = ({ children }) => {

 

  const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODAzMzJlY2Q2NzQ5ODAyM2I2NGM2NzQ5OWZiZDE1MiIsInN1YiI6IjY0MTFhOWY2ZWRlMWIwMjg2MzVkMWRiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-EYaxTyNfbwbkM_CkkFkQLH7hm0XRyXzGF3vveuhfN8';
  const API_BASE = 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1';
 

  const [url, setUrl] = useState(API_BASE);

  const [moviesData, setMoviesData] = useState([]);
  
  const getMoviesFromDBMovies = async (url) => {
   
      const options = {
        method: 'GET',
        url:url,
       
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY} `,
        }
      };

      axios
        .request(options)
        .then(function (response) {

          const DATA = response.data.results;
       
          DATA.map((movies)=> {
            movies.poster_path = `https://image.tmdb.org/t/p/w200${movies.poster_path}`
            movies.backdrop_path = `https://image.tmdb.org/t/p/w500${movies.backdrop_path}`
          });

          setMoviesData(DATA);
         
        })
        .catch(function (error) {
          console.error(error);
        });
  };

  useEffect(()=> {
     getMoviesFromDBMovies(url)
    
  }, [url])

  const hendleCategoriaMovies = async (categoria) => {
     setUrl(categoria)
  }

  


  

 
  return (
    <MoviesContext.Provider value={
        { 
           moviesData,
           hendleCategoriaMovies
        }
    }>
      {children}
    </MoviesContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useMoviesContext = () => useContext(MoviesContext);
