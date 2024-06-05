import React, {useState, useEffect} from "react"
import{ContainerArea, ContainerMovie, MovieDetails, ContainerSimilar, Section, Blur} from "./FilmeStyled..jsx"
import axios from "axios"
import { Card } from "../card/Card"
import { Btn } from "../button/Btn.jsx"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useMoviesContext } from "../../contexts/MoviesContext"

export const FilmeDetails = ({Movie}) => {

    const { hendleCategoriaMovies } = useMoviesContext()

    const getlocalMovie = JSON.parse(localStorage.getItem("Movies"))
    const getlocalid = JSON.parse(localStorage.getItem("id"))
    
  
    const { id } = useParams()
   
    const [moviesData, setMoviesData] = useState([]);
    const [similarMovies, setSimilarMovies] = useState(getlocalMovie || Movie );
    const [idMovie, setIdMovieId] = useState(getlocalid || id)

   

    const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODAzMzJlY2Q2NzQ5ODAyM2I2NGM2NzQ5OWZiZDE1MiIsInN1YiI6IjY0MTFhOWY2ZWRlMWIwMjg2MzVkMWRiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-EYaxTyNfbwbkM_CkkFkQLH7hm0XRyXzGF3vveuhfN8';
    const url =`https://api.themoviedb.org/3/movie/${idMovie}/similar?language=pt-US&page=1`
    const API_BASE ='https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1'

        
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
                    movies.backdrop_path = `https://image.tmdb.org/t/p/w500${movies.backdrop_path}`
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
  

    const hendleMovieId = (id) => {
        const newMovie = moviesData.filter((movie) => movie.id === id)
        setSimilarMovies(newMovie)
        setIdMovieId(id)
       
    }

    const handleClearLocalStorage = () => {
        localStorage.removeItem("id");
        localStorage.removeItem("Movies");
        hendleCategoriaMovies(API_BASE)
    };
  
    return (
        <>
            <ContainerArea backdrop_path={similarMovies[0].backdrop_path} >
                {
                    similarMovies.map((item) => (
                        <ContainerMovie key={item.id}>
                            <div>
                                <section>
                                    <Link  
                                        className={"link"} to={"/"}
                                        onClick={handleClearLocalStorage}
                                    >
                                        <h1>O Movies </h1>
                                    </Link>
                                    <span>/ {item.title}</span>
                                </section>
                                <Btn />
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
                <Blur>

                </Blur>
            
            </ContainerArea>

            <Section>
                <div>
                   { moviesData.length > 0 ? <h3>Related</h3> : ""}
                </div>
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
            </Section>
        </>
    )
}