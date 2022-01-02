import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import * as cmp from '../../components'


const mockData = [
    { title: 'tarefa 1'},
    { title: 'tarefa 2'}
]


const TaskList = () => {

    const [list, setList] = useState([ ...mockData])
    const stateTasks = useSelector(state => state.TASKS)

    useEffect(() => {
        const { error, data } = stateTasks

        if (error) {
            setList([])
            return
        }

        // if (!data.length) return
        console.log(1111,data)
        
        // setList(data || [])

    }, [stateTasks])

    console.log(77,list)
    return (
        <cmp.MainMenu>
        
            {Array.isArray(list) && list.map((row, key) => (
                <div key={key}>{row.title}</div>
            ))}
        
        </cmp.MainMenu>
    )
}

export default memo(TaskList)