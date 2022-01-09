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
            name:'name',
            label: 'Nome Completo' 
        },
        {
            name: 'mail',
            label: 'Endereço de e-mail'
        },
        {
            name: 'phone',
            label: 'Número de Telefone'
        }
    ]

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


                    {formList.map((field, i) => {
                        return (
                            <ST.ColFormRow>
                                <cmp.Forms.Input
                                    name={field?.name}
                                    label={field?.label}
                                    value={forms?.name}
                                    onChange={onChangeForms}
                                />
                            </ST.ColFormRow>
                        )
                    })}



                    <cmp.Button />
                </ST.ColForm>
            </ST.Container>
        </cmp.MainMenu>

    )
}

export default memo(Contact)
