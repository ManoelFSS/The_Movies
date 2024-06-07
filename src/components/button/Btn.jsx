import React from "react"
import { Link } from "react-router-dom"
import { StyledSearch } from "./BtnStyles"
import { useMoviesContext } from "../../contexts/MoviesContext"

export const Btn = () => {

    const { setToogleMenu } = useMoviesContext()

    return (
       <Link style={{ textDecoration: "none" }} to="/Search"
            onClick={() => setToogleMenu(!setToogleMenu)}
        >
            <StyledSearch>
                Search for a movies
            </StyledSearch>
       </Link>
            
    )
}