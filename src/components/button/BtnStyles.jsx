import styled from "styled-components";

export const StyledSearch = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 6px;
    cursor: pointer;
    transition: All 0.2s ;
    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0);
    position: relative;
    z-index: 2;

    &:hover {
        border: 1px solid rgba(255, 255, 255, 0.7);
        color: white;
    }

    .Link {
        text-decoration: none;
    }
 `