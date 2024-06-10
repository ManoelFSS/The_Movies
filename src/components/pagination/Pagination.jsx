import React, { useEffect, useState } from "react";
import { ContainerPagination } from "./PaginationStyles";
import { useMoviesContext } from "../../contexts/MoviesContext";

export const Pagination = () => {

    const {getMoviesFromDBMovies,url } = useMoviesContext();
  
    const [num, setNum] = useState([1, 2, 3, 4, 5]);
    const [pageCaunt, setPageCount] = useState(1);
    const API_BASE = `${url}${pageCaunt}`;



useEffect(() => {
    hendleCaunt()
}, [pageCaunt]);

    const hendleCaunt = () => {
    
        setNum(pageCaunt <= 1 ? num :[num[0] = pageCaunt , num[1] = ( pageCaunt + 1 ), num[2] = (pageCaunt + 2), num[3] = ( pageCaunt + 3) , num[4] = ( pageCaunt + 4)]);
        getMoviesFromDBMovies(API_BASE)
        console.log(pageCaunt)
    }

    const hendleClass = (e) => {

       const span = document.querySelectorAll('span')

       span.forEach((span) => {
           span.classList.remove('ativo')

           if(pageCaunt == span.innerText){
             span.classList.add('ativo') 
           }
       })
    }
   
  
    return (
        <ContainerPagination>
            <div onClick={() => {setPageCount(pageCaunt <= 5 ? 1 :( pageCaunt - 5) ), setNum(pageCaunt <= 5 ? [1, 2, 3, 4, 5] : [num[0] = 1, num[1] = 2, num[2] = 3, num[3] = 4, num[4] = 5])} }></div>
            {num.map((num, id) => (
                <span
                    key={id}
                    className=".ativo"
                    onClick={(e) =>{ setPageCount(Number(e.target.innerText) <= 1 ? 1 : Number(e.target.innerText)), hendleClass(e.target) }}
                >
                    {num}
                </span>
            ))}...
        </ContainerPagination>
    );
}