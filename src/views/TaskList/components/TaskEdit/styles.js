import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: flex-end;
	margin: 20px 20px;
	padding: 20px 20px;
	border: 1px solid black;
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
`

export const Input = styled.input`
	
`

export const ButtonSave = styled.button`
	border-radius: 8px;
	border: 1px solid #E485C4;
	padding: 4px 8px;
	background-color: #DF43AB;
	color: white;

	&:hover {
        background-color: #F3E2ED;
		color: #DF43AB;
    }

    &:active {
        background-color: #F3C0E2;
		color: #DF43AB;

        }
	
`


