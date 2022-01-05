import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
`

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #700047;
`

export const Label = styled.div`
    display: flex;
    width: 100%;
    padding: 8px 8px;
    font-size: 25px;
`
export const Data = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    padding: 0 15px;


    &:hover {
        background-color: #F3E2ED;
    }

    &:active {
        background-color: #F3C0E2;
        }
`
export const Checkbox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
    & > input {
        width: 25px;
        height: 25px;
    }    
`
export const Close = styled.div`
   font-size: 24px;
   font-weight: bold;
   color: #700047;
   padding: 8px 10px;
   cursor: pointer;
`
