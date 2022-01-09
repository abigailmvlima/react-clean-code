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

    const onChangeForms = (e) => {
        // setForms({...forms, })

    }

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
                <ST.ColForm>
                    <cmp.Forms.Input
                        label={'Nome Completo'}
                        value={forms?.name}
                        onChange={onChangeForms}
                    />
                    
                    <cmp.Forms.Input
                        label={'Endereço de e-mail'}
                        value={forms?.mail}
                        onChange={onChangeForms}
                    />
                    
                    <cmp.Forms.Input
                        label={'Telefone'}
                        value={forms?.phone}
                        onChange={onChangeForms}
                    />
                    <cmp.Button />
                </ST.ColForm>
            </ST.Container>
        </cmp.MainMenu>

    )
}

export default memo(Contact)
