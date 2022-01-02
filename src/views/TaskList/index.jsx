import { memo } from 'react'

import * as cmp from '../../components'

const TaskList = () => {
    return (
        <cmp.MainMenu>Lista de Tarefas</cmp.MainMenu>
    )
}

export default memo(TaskList)