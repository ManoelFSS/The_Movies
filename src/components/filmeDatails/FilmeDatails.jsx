import React, {useState, useEffect} from "react"
import{ContainerArea, ContainerMovie, MovieDetails, ContainerSimilar} from "./FilmeStyled..jsx"
import axios from "axios"
import { Card } from "../card/Card"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export const FilmeDetails = ({Movie}) => {

    const getlocalMovie = JSON.parse(localStorage.getItem("Movies"))
    const getlocalid = JSON.parse(localStorage.getItem("id"))

    const { id } = useParams()
   
    const [moviesData, setMoviesData] = useState([]);
    const [similarMovies, setSimilarMovies] = useState(getlocalMovie || Movie );
    const [idMovie, setIdMovieId] = useState(getlocalid || id)

    const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODAzMzJlY2Q2NzQ5ODAyM2I2NGM2NzQ5OWZiZDE1MiIsInN1YiI6IjY0MTFhOWY2ZWRlMWIwMjg2MzVkMWRiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-EYaxTyNfbwbkM_CkkFkQLH7hm0XRyXzGF3vveuhfN8';
    const url =`https://api.themoviedb.org/3/movie/${idMovie}/similar?language=pt-US&page=1`

        
    const getMoviesFromDBMovies = async () => {
    
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
                });

                setMoviesData(DATA);
        
            }).catch(function (error) {
                console.error(error);

            });
    };

    useEffect(()=> {
        localStorage.setItem("Movies", JSON.stringify(similarMovies))
        localStorage.setItem("id", JSON.stringify(idMovie))
        getMoviesFromDBMovies()

        window.addEventListener("popstate", handleClearLocalStorage);

    }, [idMovie, similarMovies, moviesData])

    const hendleMovieId = (i) => {
        const newMovie = moviesData.filter((movie) => movie.id === i)
        setSimilarMovies(newMovie)
        setIdMovieId(i)
       
    }

    const handleClearLocalStorage = () => {
        localStorage.removeItem("id");
        localStorage.removeItem("Movies");
    };
  
     
    return (
        <>
            <ContainerArea>
                {
                    similarMovies.map((item) => (
                        <ContainerMovie key={item.id}>
                            <div>
                                <Link  
                                    className={"link"} to={"/"}
                                    onClick={handleClearLocalStorage}
                                >
                                    <h1>O Movies </h1>
                                </Link>
                                <span>/ {item.title}</span>
                            </div>
                            <MovieDetails>
                                <figure>
                                    <Card 
                                        image={item.poster_path} 
                                        name={item.title}
                                    />  
                                </figure>
                                <article>
                                    <h3>{item.release_date}</h3>
                                    <h2>{item.title}</h2>
                                    <p>{item.overview}</p>
                                </article>
                            </MovieDetails>
                        </ContainerMovie>
                    
                    ))
                }
            
            </ContainerArea>
            <ContainerSimilar>
                <div>
                    {
                        moviesData.map((movie) => (
                           <section 
                                key={movie.id}
                                onClick={() => hendleMovieId(movie.id)}
                            >
                                <Card 
                                    key={movie.id}
                                    image={movie.poster_path} 
                                    name={movie.title}
                                 />  
                           </section>
                          
                        ))
                    }
                 </div>
            </ContainerSimilar>
        </>
    )
}