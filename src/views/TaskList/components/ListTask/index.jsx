import { memo, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import * as ST from './styles'
import actions from '../../../../stores/actions'

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
                    <ST.Item>
                        <ST.Data
                            onClick={() => {
                                setItemTaskEdit(row)
                            }}
                        >

                            <ST.Checkbox key={key}>
                                <input type="checkbox" onChange={(params) => {
                                    console.log(params)
                                }} />
                            </ST.Checkbox>
                            <ST.Label key={key}>{row.title}</ST.Label>
                        </ST.Data>
                        <ST.Close
                            onClick={() => {
                                actions.tasks.remove(row)
                            }}
                        >x</ST.Close>
                    </ST.Item>
                )
            })}
        </ST.Container>
    )
}

export default memo(ListTask)