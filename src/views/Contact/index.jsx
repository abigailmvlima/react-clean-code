import { memo, useState } from 'react'

import * as cmp from '../../components'
import * as ST from './styles'

const InfoLabel = [
	'Code Clear',
	'Rua Novo Aripuanã, 136 Guilhermina cep: 03541-010',
	'Telefone: 11 96253-9171',
	'email: abigail.lima@gmail.com',
]

const Contact = () => {
	const [forms, setForms] = useState({ name: '' })

	const formList = [
		{
			name: 'name',
			label: 'Nome Completo',
		},
		{
			name: 'mail',
			label: 'Endereço de e-mail',
			format: 'mail',
		},
		{
			name: 'phone',
			label: 'Número de Telefone Celular',
			format: 'phoneMobile',
		},
	]

	const onChangeForms = ({ name, value }) => {
		const data = {
			...forms,
			[name]: value,
		}
		setForms(data)
	}

	return (
		<cmp.MainMenu>
			<cmp.Header label={'Contato'} />
			<ST.Container>
				<ST.ColInfo>
					{InfoLabel.map((row, key) => {
						return <ST.InfoLabel key={key}>{row}</ST.InfoLabel>
					})}
				</ST.ColInfo>
				<ST.ColForm>
					{formList.map((field, i) => {
						return (
							<ST.ColFormRow>
								<cmp.Forms.Input
									name={field?.name}
									label={field?.label}
									value={forms[field.name]}
									onChange={onChangeForms}
									format={field.format}
								/>
							</ST.ColFormRow>
						)
					})}
					<ST.ColFormBT>
						<cmp.Button />
					</ST.ColFormBT>
				</ST.ColForm>
			</ST.Container>
		</cmp.MainMenu>
	)
}

export default memo(Contact)
