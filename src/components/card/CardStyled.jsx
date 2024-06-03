import styled from "styled-components";

export const CardMovie = styled.figure`
    transition: All 0.4s ease-in-out;
    box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    height: 320px;
    width: 230px;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 1px 4px 30px rgba(0, 0, 0, 1);
    }

    img {
        width:100%;
        height: 100%;
    }

`