import { memo, useState, useEffect } from 'react'
import * as ST from './styles'
import actions from '../../../../stores/actions'

const TaskEdit = (props) => {
    const { itemTaskEdit } = props
    const [dataForm, setDataForm] = useState({})
    const [typeEdit, setTypeEdit] = useState(false)

    useEffect(() => {
        // monitora caso haja alteracao em alguma parte do sistema
        if (!itemTaskEdit) {
            setTypeEdit(false)
            return
        }
        setTypeEdit(true)
        setDataForm({ ...itemTaskEdit })
    }, [itemTaskEdit])

    const onChange = (data) => {
        setDataForm({ ...dataForm, [data.target.name]: data.target.value })
    }

    const onAddTask = () => {

        if (!dataForm?.title) return

        if (typeEdit) {
            actions.tasks.edit(dataForm)
        } else {
            actions.tasks.add(dataForm)
        }
    }

    return (
        <ST.Container>
            <ST.Col>
                <ST.Label>Tarefa</ST.Label>
                <ST.Input name={'title'} type="text" placeholder="Descrição" onChange={onChange} value={dataForm?.title} />
            </ST.Col>

            <ST.Col>
                <ST.ButtonSave onClick={onAddTask}>{typeEdit ? 'Salvar' : 'Adicionar'}</ST.ButtonSave>
            </ST.Col>
        </ST.Container>
    )
}

export default memo(TaskEdit)