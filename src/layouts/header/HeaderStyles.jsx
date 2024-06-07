import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: #031a33;
    display: flex;
    height: 12vh;
    justify-content: center;
    padding: 30px 0px;
    color: white;
    position:fixed;
    width: 100%;
    top: 0;
    z-index: 10;


`;

export const HeaderConteiner = styled.section `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    gap: 1rem;

    h1 {
        font-size: 2.4rem;
        cursor: pointer;
        position: relative;
        z-index: 2;
    }

    @media (max-width: 440px) {
      
        h1 {
            font-size: 2rem;
        }
    }


`
export const Navibar = styled.section `
    display: flex;
    gap: 3rem;

`

export const Toogle = styled.section `
    display: none;
    width: 35px;
    height: 35px;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    cursor: pointer;
    transition: All 0.2s ;

    &:hover {
        border: 1px solid rgba(255, 255, 255, 0.9);
        span {
            background-color: rgba(255, 255, 255, 0.9);
        }
    }
    

    span {
        position:;
        width: 20px;
        height: 2px;
        background-color: rgba(255, 255, 255, 0.6);
        transition: All 0.2s ;
    }

    

    @media (max-width: 1183px) {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`