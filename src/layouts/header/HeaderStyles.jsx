import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: #031a33;
    display: flex;
    height: 12vh;
    justify-content: center;
    align-items: center;
    color: white;
    position:fixed;
    width: 100%;
    top: 0;
    z-index: 10;
   
`;

export const HeaderConteiner = styled.section `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    // border: 1px solid red;
    h1 {
        font-size: 2.4rem;
        cursor: pointer;
    }
`
export const Navibar = styled.section `
    display: flex;
    gap: 3rem;
`