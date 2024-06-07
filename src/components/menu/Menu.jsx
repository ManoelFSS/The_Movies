import React from "react"
import { StyledUl } from "./MenuStyles"
import { useMoviesContext } from "../../contexts/MoviesContext"

export const Menu = () => {

    const API_SERIES = 'https://api.themoviedb.org/3/tv/popular?language=pt-BR&page=1';
    const API_APOCALYPTIC = 'https://api.themoviedb.org/3/movie/437342/similar?language=pt-US&page=1';
    const API_SUPERHERO = 'https://api.themoviedb.org/3/movie/11795/similar?language=pt-US&page=1';

    const { hendleCategoriaMovies, toogle } = useMoviesContext()
   
    return (
        <StyledUl ToogleMenu={toogle === true ? "0px" : "-400px"}>
            <li onClick={() => hendleCategoriaMovies(API_APOCALYPTIC)}>
                POST-APCALYPTIC
            </li>
            <li onClick={() => hendleCategoriaMovies(API_SERIES)}>
                SERIES
            </li>
            <li  onClick={() => hendleCategoriaMovies(API_SUPERHERO)}>
                SUPERHERO
            </li>
        </StyledUl>
    )
}