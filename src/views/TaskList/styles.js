import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-top: 20px;
`
export const TaskContainer = styled.div`
	display: flex;
	padding: 10px 10px;
	border-bottom: 1px solid #ffd8ec;
	flex-direction: column;
`
export const TaskTitle = styled.div`
	display: flex;
	font-size: 22px;
	letter-spacing: 2px;
`

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0 10px;
`

export const BtAdd = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	cursor: pointer;
	color: #521039;
	letter-spacing: 1px;
	font-size: 20px;

	&:hover {
		color: #bd2985;
	}

	&:active {
		color: #f3c0e2;
	}
`
