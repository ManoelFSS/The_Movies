import React, { useState , useEffect} from "react";  
import { TitleArea, ContainerSearch,MoviesArea } from "./SearchStyles"
import {Link} from "react-router-dom"
import {Card} from "../../components/card/Card"
import axios from "axios";



export const Search = () => {

    const [moviesData, setMoviesData] = useState([]);
    const [valueInput, setValueInput] = useState("");
    
    const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODAzMzJlY2Q2NzQ5ODAyM2I2NGM2NzQ5OWZiZDE1MiIsInN1YiI6IjY0MTFhOWY2ZWRlMWIwMjg2MzVkMWRiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-EYaxTyNfbwbkM_CkkFkQLH7hm0XRyXzGF3vveuhfN8';
    const API_BASE =`https://api.themoviedb.org/3/search/movie?query=${valueInput.toLowerCase()}&include_adult=false&language=pt-US&page=1`;

    console.log(valueInput)
    console.log(moviesData)
    const getMoviesFromDBMovies = async () => {
   
        const options = {
          method: 'GET',
          url:API_BASE,
         
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
       getMoviesFromDBMovies()
      
    }, [valueInput])

    const getIdMovie = (id) => {
        const filterMovie = moviesData.filter((movie) => movie.id === id)
        localStorage.setItem("Movies", JSON.stringify(filterMovie))
        localStorage.setItem("id", JSON.stringify(id))
    }

    const hendleSearch = (e) => {
        event.preventDefault()
        setValueInput(e) 
    }


    return (
        <ContainerSearch>
            <TitleArea>
                <div>
                    <Link style={{ textDecoration: "none" }} to="/">
                        <h1>O Movies</h1>
                    </Link>
                    <span>/ Search</span>
                </div>
            </TitleArea>
            <form action="#">
                <input 
                    type="text" 
                    value={valueInput}
                    autoFocus
                    placeholder="Search for a movies" 
                    onChange={(e) => hendleSearch(e.target.value)}
                />
            </form>
            <MoviesArea>
                <div>
                    {moviesData.map((movie) => (
                    
                        <Link
                            to={`/MovieDetails/${movie.id}`} 
                            key={movie.id}
                            onClick={()=> getIdMovie(movie.id)}
                        >
                            
                            <Card 
                                image={movie.poster_path} 
                                name={movie.name}
                            />   
                        </Link>
        
                    ))}
                </div>
            </MoviesArea>
        </ContainerSearch>
    )
}