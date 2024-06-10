import styled from "styled-components";


export const ContainerPagination = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: 100%;
    padding: 20px 0px;

    div{
        display: flex;
        height: 30px;
        width: 30px;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 50% 0px 0px 50%;
        align-items: center;
        justify-content: center;
    }

    span{
        cursor: pointer;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }

    .ativo{
        background-color: rgba(255, 255, 255, 0.1);
    }

`