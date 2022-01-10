import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.div`
    display: flex;
    color: #585858;
    letter-spacing: 1px;
`

export const InputControll = styled.div`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    display: flex;
    border-radius: 5px;
    padding: 5px 8px;
    border: 1px solid #AE1E66;

    &:focus {
        outline-offset: 0px !important;
        outline: none !important;
        border: 1px solid #F082B9 !important;

    }
`