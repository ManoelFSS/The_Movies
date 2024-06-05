import React from "react"
import { Link } from "react-router-dom"
import { StyledSearch } from "./BtnStyles"

export const Btn = () => {
    return (
       <Link style={{ textDecoration: "none" }} to="/Search">
            <StyledSearch>
                Search for a movies
            </StyledSearch>
       </Link>
            
    )
}