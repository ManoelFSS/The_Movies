import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    margin-top: 12vh;
  
`
export const ContainerMovies = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    width: 70%;
    padding-top: 10px;
    img {
        width: 240px;
        height: 360px;
    }
   
`

export const Card = styled.div`
    transition: All 0.2s ease-in-out;
    box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    height: 360px;
    border-radius: 5px;
    overflow: hidden;


    &:hover {
        transform: translateY(-5px);
        box-shadow: 1px 4px 30px rgba(0, 0, 0, 1);
    }
`