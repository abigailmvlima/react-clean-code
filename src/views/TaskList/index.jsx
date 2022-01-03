import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import * as cmp from '../../components'
import actions from '../../stores/actions'
import * as ST from './styles'

const mockData = [{ title: 'tarefa 1' }, { title: 'tarefa 2' }]

const TaskList = () => {
	const [list, setList] = useState()
	const stateTasks = useSelector((state) => state.TASKS)
	const [dataForm, setDataForm] = useState({})

	useEffect(() => {
		actions.tasks.list()
	}, [])

	useEffect(() => {
		const { error, data } = stateTasks

		if (error) {
			setList([])
			return
		}

		if (!data.length) return
		setList(data || [])
	}, [stateTasks])

	const onChange = (data) => {
        setDataForm({ ...dataForm, [data.target.name]:data.target.value})
    }

    const onAddTask = () =>{
        actions.tasks.add(dataForm)
    }


	return (
		<cmp.MainMenu>
			<ST.Container>
				<ST.Col>
					<ST.Label>Titulo da Tarefa</ST.Label>
					<ST.Input name={'title'} type="text" placeholder="Titulo" onChange={onChange} value={dataForm?.title} />
				</ST.Col>

				<ST.Col>
					<ST.ButtonSave onClick={onAddTask}>Adicionar</ST.ButtonSave>
				</ST.Col>
			</ST.Container>
			{Array.isArray(list) && list.map((row, key) => <div key={key}>{row.title}</div>)}
		</cmp.MainMenu>
	)
}

export default memo(TaskList)
