import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    margin-top: 12vh;
    // border: 1px solid red;
  
`


export const Card = styled.div`
    transition: All 0.2s ease-in-out;
    box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 1px 4px 30px rgba(0, 0, 0, 1);
    }
`

export const ContainerMovies = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    flex-wrap: wrap;
    justify-content:space-between;
    width: 80%;
    // border:solid red 2px ;
    gap: 2rem;
    margin-top: 2rem;
    
    img {
        width:100%;
        height: 100%;
    }

    @media (max-width: 1053px) {
       display: flex;
       justify-content: center;
        div {
           width: 220px;
        }
    }

    @media (max-width: 594px) {
        justify-content: center;
         div {
            width: 160px;
         }
     }

     @media (max-width: 494px) {
        
         div {
            width: 130px;
         }
     }

     
     @media (max-width: 369px) {
        
        div {
           width: 100%;
        }
    }
   
`

