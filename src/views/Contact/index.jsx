import { memo } from 'react'

import * as cmp from '../../components'
import * as ST from './styles'

const InfoLabel = [
    'Code Clear',
    'Rua Novo Aripuanã, 136 Guilhermina cep: 03541-010',
    'Telefone: 11 96253-9171',
    'email: abigail.lima@gmail.com',
]

const Contact = () => {
    return (
        <cmp.MainMenu>
            <cmp.Header label={'Contato'} />
            <ST.Container>
                <ST.ColInfo>
                    {InfoLabel.map((row, key) => {
                        return (
                            <ST.InfoLabel key={key}>{row}</ST.InfoLabel>
                        )
                    })}
                </ST.ColInfo>
                <ST.ColForm>Form</ST.ColForm>
            </ST.Container>
        </cmp.MainMenu>

    )
}

export default memo(Contact)
