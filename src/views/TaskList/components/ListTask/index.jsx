import { memo, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import * as ST from './styles'

const ListTask = (props) => {

    const { setItemTaskEdit } = props

    const [list, setList] = useState()
    const stateTasks = useSelector((state) => state.TASKS)

    useEffect(() => {
        const { error, data } = stateTasks

        if (error) {
            setList([])
            return
        }

        if (!data.length) return

        setList(data || [])
    }, [stateTasks])

    return (
        <ST.Container>
            {Array.isArray(list) && list.map((row, key) => {
                return (
                    <ST.Item onClick={() => {
                        setItemTaskEdit(row)
                    }}>
                        <ST.Label key={key}>{row.id}</ST.Label>
                        <ST.Label key={key}>{row.title}</ST.Label>
                    </ST.Item>
                )
            })}
        </ST.Container>
    )
}

export default memo(ListTask)