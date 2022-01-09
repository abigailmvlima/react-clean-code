import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`

export const Button = styled.button`
    display: flex;
    border-radius: 8px;
    background-color: #99004C;
    letter-spacing: 2px;
    padding: 4px 8px;
    border: 1px solid #7D013F;
    color: #FFF;
    
    
    &:hover {
       background-color: #AB4678;
       color: #F3D7E5;
    }

    &:active {
        background-color: #810041;
        color: #EFCCDE;
        }
`
