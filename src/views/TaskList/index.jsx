import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import * as cmp from '../../components'
import actions from '../../stores/actions'
import { ListTask, TaskEdit } from './components'
import * as ST from './styles'

const TaskList = () => {

	const [itemTaskEdit, setItemTaskEdit] = useState()
	const [list, setList] = useState([])
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

	const sendProps = { itemTaskEdit, setItemTaskEdit }


	return (
		<cmp.MainMenu>
			<ST.Container>
				<TaskEdit {...sendProps} />
				<ST.TaskToDo>
					<ListTask {...sendProps} data={list.filter(f => !f.checked)} />
				</ST.TaskToDo>
				<ST.TaskPerformed>
					<ListTask {...sendProps} data={list.filter(f => !!f.checked)} />
				</ST.TaskPerformed>

			</ST.Container>
		</cmp.MainMenu>
	)
}

export default memo(TaskList)
