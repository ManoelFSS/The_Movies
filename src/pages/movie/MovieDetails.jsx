import React from "react"
import { useParams } from "react-router-dom"
import { useMoviesContext } from "../../contexts/MoviesContext"
import { FilmeDetails } from "../../components/filmeDatails/FilmeDatails"

export const MovieDetails = () => {

    const {id} = useParams()
    const { moviesData } = useMoviesContext()
   
    const movie = moviesData.filter((movie) => movie.id === Number(id))
   
    return (
       <FilmeDetails Movie={movie}/>
    )
}