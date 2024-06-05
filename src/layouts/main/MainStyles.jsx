import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    margin-top: 12vh;
  
`

// export const Card = styled.div`
//     transition: All 0.4s ease-in-out;
//     box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.6);
//     cursor: pointer;
//     border-radius: 5px;
//     overflow: hidden;
//     height: 330px;

//     &:hover {
//         transform: translateY(-10px);
//         box-shadow: 1px 4px 30px rgba(0, 0, 0, 1);
//     }
// `

export const ContainerMovies = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    flex-wrap: wrap;
    justify-content:space-between;
    width: 80%;
    gap: 2rem;
    margin-top: 2rem;

    figure {
        width: 220px;
        height: 300px;
    }

    @media (max-width: 1150px) {
      display: flex;
      width: 90%;
      justify-content: center;

      figure {
         width: 190px;
         height: 280px;
      }
       
    }

    @media (max-width: 594px) {
      
         figure {
            width: 190px;
         }
     }

     @media (max-width: 494px) {
        
         figure {
            width: 170px;
         }
     }

     @media (max-width: 417px) {
        
         figure {
           width: 150px;
           height: 250px;
        }
    }


     @media (max-width: 369px) {
        
         figure {
           width: 300px;
           height: 400px;
        }
    }
   
`

