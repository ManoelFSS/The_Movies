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
    z-index: 10;
    top: 0;
`;

export const HeaderConteiner = styled.section `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    h1 {
        font-size: 2.4rem;
        cursor: pointer;
    }
`
export const Navibar = styled.section `
    display: flex;
    gap: 4rem;
`