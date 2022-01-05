import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`
export const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #801D4F;
    justify-content: flex-start;
    padding: 10px 10px;
    align-items: center;
`

export const Logo = styled.div`
    display: flex;
    padding: 8px 8px;
    color: #F7EBF1;
    font-weight:bold;
    font-size: 25px;
`

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    margin: 8px 8px;
`
const ItemEnabled = css`
    border-bottom: 2px solid #FFF;
    color: #fff;
    font-weight: bold;
`

const ItemDisabled = css`
    &:hover {
       color: #FFF;
    }

    &:active {
        color: #FFDFF0; 
    }
`

export const Item = styled.div`
    display: flex;
    padding: 0px 8px;
    cursor: pointer;
    color: #FFCDE6;
    font-size: 25px;
    letter-spacing: 1px;
    ${props => props?.actived ? ItemEnabled : ItemDisabled};    
`

export const Body = styled.div`
    display: flex;
    padding: 0 10px;
`


