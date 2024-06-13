import React, { useEffect } from "react"
import { StyledMain, ContainerMovies } from "./MainStyles"
import { useMoviesContext } from "../../contexts/MoviesContext"
import { Link } from "react-router-dom"
import { Card } from "../../components/card/Card"


export const Main = () => {

    const { moviesData } = useMoviesContext()

    console.log(moviesData)

    useEffect(() => {
        localStorage.clear()
    }, [])
   
    return (
        <StyledMain>
            <ContainerMovies>
              {moviesData.map((movie) => (
              
                    <Link 
                        to={`/MovieDetails/${movie.id}`} 
                        key={movie.id}
                    >
                       
                        <Card 
                            image={movie.poster_path} 
                            name={movie.title}
                        />   
                    </Link>
             
              ))}
            </ContainerMovies>
        </StyledMain>
    )
}