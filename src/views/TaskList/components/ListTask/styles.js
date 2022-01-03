import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 20px;
	padding: 20px 20px;
	border: 1px solid black;
	border-radius: 10px;
    padding-bottom: 30px;
`

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
    cursor: pointer;

    &:hover {
        background-color: #F3E2ED;
    }

    &:active {
        background-color: #F3C0E2;
        }
`

export const Label = styled.div`
    display: flex;
    padding: 8px 8px;
`