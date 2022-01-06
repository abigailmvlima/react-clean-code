import { memo, useState, useEffect, useRef } from 'react'
import * as ST from './styles'
import actions from '../../../../stores/actions'

const TaskEdit = (props) => {

    // esta pagina edita o componente

    const { itemTaskEdit, statusEdit, setStatusEdit } = props
    const [dataForm, setDataForm] = useState({})
    const [typeEdit, setTypeEdit] = useState(false)
    const descriptionEdit = useRef()

    useEffect(() => {
        if (!statusEdit) return
        setTypeEdit(statusEdit == 'edit')
        if (statusEdit == 'add') {
            setDataForm({ id: null, title: '', checked: false })
        } else {
            setDataForm({ ...itemTaskEdit })
        }
        descriptionEdit.current.focus()
    }, [statusEdit, itemTaskEdit])

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
        setStatusEdit(null)
    }

    const onDataClear = () => {
        setDataForm({ id: null, title: '', checked: false })
        setTypeEdit(false)
        setStatusEdit(null)
    }

    const onCancelTask = () => {
        onDataClear()
    }

    return (
        <ST.Container>
            <ST.Col>
                <ST.Label>Tarefa</ST.Label>
                <ST.Input
                    ref={descriptionEdit}
                    name={'title'}
                    type="text"
                    placeholder="Descrição"
                    onChange={onChange}
                    value={dataForm?.title}
                    onKeyUp={(event) => {
                        if (event.keyCode == 27) {
                            onDataClear()
                        }
                    }}
                    onKeyPress={(event) => {
                        if (event.charCode != 13) return
                        onAddTask()
                        onDataClear()
                    }}
                />
            </ST.Col>

            <ST.ColButton>
                <ST.ButtonSave onClick={onAddTask}>{typeEdit ? 'Salvar' : 'Adicionar'}</ST.ButtonSave>
                <ST.ButtonCancel onClick={onCancelTask}>Cancelar</ST.ButtonCancel>
            </ST.ColButton>
        </ST.Container>
    )
}

export default memo(TaskEdit)