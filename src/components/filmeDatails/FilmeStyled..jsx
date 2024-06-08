import styled from "styled-components";

export const ContainerArea = styled.div`
    width: 100%;
    padding-bottom: 40px;
    display: flex;
    justify-content: center;
    background: url(${props => props.$backdrop_path}) no-repeat center / 110% 100%;
    position: relative;
   

    @media (max-width: 370px) {
        background:none;
    }

`

export const Blur = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%);
    z-index: 0;
`

export const ContainerMovie = styled.section`
    width:80%;

    .link{
        text-decoration: none;
    }

    button {
        margin-bottom: 30px;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        section {
            display: flex;
            gap: 10px;
            padding: 30px 0px;
            align-items: flex-end;

            h1 {
                font-size: 2.4rem;
                cursor: pointer;
                position: relative;
                z-index: 1;
            }
    
            span {
                color: rgba(255, 255, 255, 0.6);
                font-size: 1.4 rem;
                margin-bottom: 9px;
                margin-right: 5px;
                position: relative;
                z-index: 1;
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

        @media (max-width: 576px) {
            button {
               margin-bottom: 30px;
            }
        }
      

       
    }
   
`

export const MovieDetails = styled.section`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;

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
        min-width:280px;
        padding: 10px 0px;
    }

   
    @media (max-width: 780px) {
        flex-wrap: wrap;

        h2, h3, p {
            padding: 10px 0px;
        }
    }

    @media (max-width: 445px) {
        gap: 0rem;

        figure {
            width:250px;
            height: 400px;
    
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        
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
        overflow-y: hidden;
        background-color:  rgba(000, 000, 000, 0);
        padding:20px 0px;

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
            height: 230px;
        }

        @media (max-width: 780px) {
            &::-webkit-scrollbar {
                display: none;
            }
        }

        @media (max-width: 445px) {
            width: 90%;
        }

        margin-bottom: 50px;
     
    }

`
export const Section = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
  
    div {
        width: 80%;

        h3 {
            font-size: 1.4rem;
            padding: 10px 0px 0px;
        }
    }

`