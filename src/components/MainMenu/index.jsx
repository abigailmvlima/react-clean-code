import { memo } from 'react'
import { useSelector } from 'react-redux'
import actions from '../../stores/actions'
import * as ST from './styles'

const MainMenu = ({ children }) => {

    const stateNAVIGATE = useSelector((state) => state?.NAVIGATE)

    const dataMenu = [
        {
            title: 'Home',
            onClick: () => actions.navigate.show('/'),
            actived: stateNAVIGATE?.routeKey?.current == '/'
        },
        {
            title: 'Tarefas',
            onClick: () => actions.navigate.show('/tarefas'),
            actived: stateNAVIGATE?.routeKey?.current == '/tarefas'
        },
        {
            title: 'Contato',
            onClick: () => actions.navigate.show('/contato'),
            actived: stateNAVIGATE?.routeKey?.current == '/contato'
        },
        {
            title: 'Quem Somos',
            onClick: () => actions.navigate.show('/quemsomos'),
            actived: stateNAVIGATE?.routeKey?.current == '/quemsomos'
        },
    ]

    return (
        <ST.Container>
            <ST.NavBar>

                <ST.Logo>Code Clear</ST.Logo>
                <ST.Menu>
                    {dataMenu.map((row, key) => {
                        return (
                            <ST.Item
                                actived={row.actived}
                                onClick={row.onClick}
                            >{row.title}</ST.Item>
                        )
                    })}
                </ST.Menu>
            </ST.NavBar>
            <ST.Body>
                {children}
            </ST.Body>
        </ST.Container>
    )
}

export default memo(MainMenu)