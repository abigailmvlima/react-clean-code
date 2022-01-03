import { memo, useEffect, useState } from 'react'

import * as cmp from '../../components'
import actions from '../../stores/actions'
import { ListTask, TaskEdit } from './components'

const TaskList = () => {

	useEffect(() => {
		actions.tasks.list()
	}, [])

	return (
		<cmp.MainMenu>
			<TaskEdit />
			<ListTask />
		</cmp.MainMenu>
	)
}

export default memo(TaskList)
