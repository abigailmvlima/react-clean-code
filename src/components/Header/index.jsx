import { memo } from 'react'

import * as ST from './styles'

const Header = ({ label, childRight }) => {
	return (
		<ST.Container>
			<ST.Label>{label}</ST.Label>
			<ST.ChildRight>{childRight && childRight}</ST.ChildRight>
		</ST.Container>
	)
}

export default memo(Header)
