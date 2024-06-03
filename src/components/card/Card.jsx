import React from "react";
import { CardMovie } from "./CardStyled";

export const Card = ({image, name}) => {
    return (
        <CardMovie >
            <img src={image} alt={name} />
        </CardMovie>
    )
}