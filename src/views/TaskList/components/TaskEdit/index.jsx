import { memo, useState } from 'react'
import * as ST from './styles'
import actions from '../../../../stores/actions'

const TaskEdit = (props) => {
    const [dataForm, setDataForm] = useState({})

    const onChange = (data) => {
        setDataForm({ ...dataForm, [data.target.name]: data.target.value })
    }

    const onAddTask = () => {
        actions.tasks.add(dataForm)
    }

    return (
        <ST.Container>
            <ST.Col>
                <ST.Label>Titulo da Tarefa</ST.Label>
                <ST.Input name={'title'} type="text" placeholder="Titulo" onChange={onChange} value={dataForm?.title} />
            </ST.Col>

            <ST.Col>
                <ST.ButtonSave onClick={onAddTask}>Adicionar</ST.ButtonSave>
            </ST.Col>
        </ST.Container>
    )
}

export default memo(TaskEdit)