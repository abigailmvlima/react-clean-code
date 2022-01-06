import { memo } from 'react'

import * as ST from './styles'

const Header = ({ label }) => {
    return (
        <ST.Container>
            <ST.Label>{label}</ST.Label>
        </ST.Container>
    )
}

export default memo(Header)