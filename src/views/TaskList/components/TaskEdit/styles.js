import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: flex-end;
	margin: 20px 20px;
	padding: 20px 20px;
	border: 2px solid #700047;
	border-radius: 10px;
	`

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 4px;
`

export const Label = styled.div`
	display: flex;
	margin: 4px 4px;
	font-size: 23px;
`

export const Input = styled.input`
	border-radius: 6px;
	border: 1px solid #700047;
	padding: 5px 150px 5px 10px;
	background-color: #F2EFF1;
`

export const ColButton = styled.div`
	display: flex;
	flex-direction: row;
	padding: 10px;
`

export const ButtonSave = styled.button`
	border-radius: 8px;
	border: 1px solid;
	padding: 6px 15px;
	margin: 0 5px;
	background-color: #B33388;
	color: white;

	&:hover {
        background-color: #D73EA4;
    }

    &:active {
        background-color: #EF72C5;
        }
	
`

export const ButtonCancel = styled.button`
	border-radius: 8px;
	border: 1px;
	padding: 6px 15px;
	margin: 0 5px;
	background-color: #741751;
	color: white;

	&:hover {
        background-color: #8A1C61;
		color: #FFF;
    }

    &:active {
        background-color: #EB93CE;
		color: #DF43AB;

        }
	
`


