import styled from "styled-components";

export const StyledSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 6px;
    cursor: pointer;
    transition: All 0.2s ;
    color: rgba(255, 255, 255, 0.6);

    &:hover {
        border: 1px solid rgba(255, 255, 255, 0.7);
        color: white;
    }
 `