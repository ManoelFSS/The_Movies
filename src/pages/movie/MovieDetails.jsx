import React from "react"
import { useParams } from "react-router-dom"
import { useMoviesContext } from "../../contexts/MoviesContext"
import { FilmeDetails } from "../../components/filmeDatails/FilmeDatails"

export const MovieDetails = () => {

    return (
       <FilmeDetails />
    )
}