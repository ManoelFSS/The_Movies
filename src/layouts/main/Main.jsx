import React from "react"
import { StyledMain, ContainerMovies, Card } from "./MainStyles"
import { useMoviesContext } from "../../contexts/MoviesContext"


export const Main = () => {

    const { moviesData } = useMoviesContext()
    console.log(moviesData)

    return (
        <StyledMain>
            <ContainerMovies>
              {moviesData.map((movie) => (
                <Card key={movie.id}>
                    <img src={movie.poster_path} alt={movie.title} />
                </Card>
              ))}
            </ContainerMovies>
           
        </StyledMain>
    )
}