import { memo } from 'react'

import * as ST from './styles'
import lib from '../../../lib'

const Input = ({ name, label, value, onChange, format }) => {
	const formatValue = (value) => {
		let dataTemp = value
		console.log(format)
		switch (format) {
			case 'mail':
				dataTemp = lib.mails.format(dataTemp)
				break

			case 'phoneMobile':
				dataTemp = lib.phones.formatMobile(dataTemp)
				break

			default:
				dataTemp = lib.str.capitalizeWords(dataTemp)
				break
		}

		return dataTemp
	}

	const _onChange = (e) => {
		const value = e?.target?.value
		const dataTemp = formatValue(value)
		onChange && onChange({ name, value: dataTemp })
	}

	return (
		<ST.Container>
			<ST.Label>{label}</ST.Label>
			<ST.InputControll>
				<ST.Input autoComplete={'new-value'} name={name} value={value} onChange={_onChange} />
			</ST.InputControll>
		</ST.Container>
	)
}

export default memo(Input)
