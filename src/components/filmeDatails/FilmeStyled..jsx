import styled from "styled-components";

export const ContainerArea = styled.div`
    width: 100%;
    padding-bottom: 40px;
    display: flex;
    justify-content: center;

`

export const ContainerMovie = styled.section`
    width:80%;

    .link{
        text-decoration: none;
    }

    div {
        display: flex;
        gap: 10px;
        padding: 30px 0px;
        align-items: flex-end;

        h1 {
            font-size: 2.4rem;
            cursor: pointer;
        }

        span {
            color: rgba(255, 255, 255, 0.6);
            font-size: 1.3 rem;
            margin-bottom: 4px;
        }

        @media (max-width: 445px) {
            flex-wrap: wrap;
            h1 {
                font-size: 2rem;
                cursor: pointer;
            }
    
            span {
                color: rgba(255, 255, 255, 0.6);
                font-size: 1rem;
                margin-bottom: 4px;
            }
        }
    }
   
`

export const MovieDetails = styled.section`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    figure {
        width:260px;
        height: 400px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    h3 {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.6);
        padding: 10px 30px;
    }
    h2 {
        padding: 0px 30px;
        font-weight: 600;
        font-size: 2rem;
    }
    p {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.6);
        padding: 10px 30px;
        max-width: 900px;
    }

    article {
        min-width:300px;
        padding: 10px 0px;
    }
`
export const  ContainerSimilar = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    div {
        display:flex;
        justify-content:;
        align-items:center;
        width: 80%;
        gap: 2rem;
        overflow-x:auto;
        padding: 1rem 1rem;
        margin-bottom: 2rem;

        background-color:  rgba(255, 255, 255, 0.1);

        &::-webkit-scrollbar {
           height: 6px;
     
        }

        &::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            cursor: pointer;
           
        }

        figure {
            width: 170px;
            height: 240px;
        }

        @media (max-width: 780px) {
            &::-webkit-scrollbar {
                display: none;
            }
        }

        @media (max-width: 445px) {
            width: 90%;
        }
     
    }

    
`