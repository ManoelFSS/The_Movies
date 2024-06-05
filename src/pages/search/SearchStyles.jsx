import styled from "styled-components";

export const ContainerSearch = styled.section`
    height: 100vh;

    form {
        display: flex;
        justify-content: center;
        align-items: center;

        input {
            width: 80%;
            background-color: transparent;
            border: solid 1px rgba(255, 255, 255, 0.4);
            border-radius: 6px;
            height: 50px;
            padding: 0px 20px;
            color: white;
            font-size: 1rem;
            transition: All 0.2s ;
        }

        input:focus {
            outline: none;
            border: solid 1px rgba(255, 255, 255, 0.7);
        }
    }
   
`

export const TitleArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        width: 80%;
        color: white;
        font-size: 1rem;
        align-items: center;
        gap: 1rem;
        padding: 30px 0px;

        h1 {
            font-size: 2.5rem;
            cursor: pointer;
            position: relative;
            z-index: 1;

            @media (max-width: 500px) {
                font-size: 2rem;
            }
        }
    
        span {
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: -9px;
        }
     
    }
`

export const MoviesArea = styled.section`
    display: flex;
    justify-content: center;

    div {
        display: flex;
        width: 80%;
        gap: 2rem;
        padding: 30px 0px;
        overflow-y: auto;
        margin-top: 3rem;

        &::-webkit-scrollbar {
           height: 6px;
        }

        &::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            cursor: pointer;
        }

        @media (max-width: 500px) {
           &::-webkit-scrollbar {
              height: 0;
           }
        }

        figure {
            width: 170px;
            height: 300px;
        }
    }
`