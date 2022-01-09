import { memo } from 'react'

import * as ST from './styles'

const Input = ({ label, value, onChange }) => {
    return (
        <ST.Container>
            <ST.Label>{label}</ST.Label>
            <ST.InputControll>
                <ST.Input />
            </ST.InputControll>
        </ST.Container>
    )
}

export default memo(Input)