import styled from "styled-components";

export const StyledUl = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    list-style: none;

    li {
        cursor: pointer;
        background-color:rgba(255, 255, 255, 0.098);
        padding: 10px 10px 10px 20px;
        position: relative;
        color: rgba(255, 255, 255, 0.6);
        border-radius: 6px 0px 0px 6px;
        transition: All 0.2s ;

        &::after {
            content: '';
            position: absolute;
            top: 0px;
            right: -20px; 
            width: 0px;
            height: 0px;
            border-top: 20px solid transparent;
            border-bottom: 19px solid transparent;
            border-left: 20px solid rgba(255, 255, 255, 0.098); 
            transition: All 0.2s ;
        }
       
    }

    li:hover {
        background-color: rgba(255, 255, 255, 0.18);
        color: white;
    }

    li:hover::after {
        border-left: 20px solid rgba(255, 255, 255, 0.18);
    }

    @media (max-width: 1183px) {
        display: flex;
        position: absolute;
        flex-direction: column;
        left: 0px;
        top: 0px;
        background-color: rgba(000, 000, 000, 0.8);
        height: calc(100vh);
        justify-content: flex-start;
        align-items: flex-start;
        width: 400px;
        padding-left: 40px;
        padding-top: 160px;
        margin-left: ${props => props.ToogleMenu};
        transition: All 0.2s ;
        z-index: 1;
       
    }


 `