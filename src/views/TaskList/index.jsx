import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import * as cmp from '../../components'
import actions from '../../stores/actions'
import { ListTask, TaskEdit } from './components'
import * as ST from './styles'

const TaskList = () => {

	const [itemTaskEdit, setItemTaskEdit] = useState()
	const [list, setList] = useState([])
	const [statusEdit, setStatusEdit] = useState(null)
	const stateTasks = useSelector((state) => state.TASKS)

	useEffect(() => {
		actions.tasks.list()
	}, [])

	useEffect(() => {
		const { error, data } = stateTasks

		if (error) {
			setList([])
			return
		}

		setList(data || [])
	}, [stateTasks])

	useEffect(() => {
		if (!itemTaskEdit) return
		setStatusEdit('edit')
	}, [itemTaskEdit])

	const sendProps = { itemTaskEdit, setItemTaskEdit, statusEdit, setStatusEdit }
	const dataList = list.filter(f => !f.checked)
	const dataListPerfomed = list.filter(f => !!f.checked)
	const onAddList = () => {
		setStatusEdit('add')
	}

	return (
		<cmp.MainMenu>
			<cmp.Header label={'Lista de Tarefas'} />
			<ST.Container>
				{!statusEdit ? (
					<div>
						{dataList.length ? (
							<ST.TaskContainer>
								<ST.Header>
									<ST.TaskTitle>
										Lista
									</ST.TaskTitle>
									<ST.BtAdd onClick={onAddList}>Adicionar</ST.BtAdd>
								</ST.Header>
								<ListTask {...sendProps} data={dataList} />
							</ST.TaskContainer>
						) : (<></>)}
						{dataListPerfomed.length ? (
							<ST.TaskContainer>
								<ST.TaskTitle>
									Executadas
								</ST.TaskTitle>
								<ListTask {...sendProps} data={dataListPerfomed} />
							</ST.TaskContainer>
						) : (<></>)}
					</div>
				) : (
					<TaskEdit {...sendProps} />
				)}
			</ST.Container>
		</cmp.MainMenu>
	)
}

export default memo(TaskList)
