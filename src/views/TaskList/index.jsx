import { memo, useEffect, useState } from 'react'

import * as cmp from '../../components'
import actions from '../../stores/actions'
import { ListTask, TaskEdit } from './components'

const TaskList = () => {

	const [itemTaskEdit, setItemTaskEdit] = useState()

	useEffect(() => {
		actions.tasks.list()
	}, [])

	const sendProps = { itemTaskEdit, setItemTaskEdit }


	return (
		<cmp.MainMenu>
			<TaskEdit {...sendProps} />
			<ListTask {...sendProps} />
		</cmp.MainMenu>
	)
}

export default memo(TaskList)
