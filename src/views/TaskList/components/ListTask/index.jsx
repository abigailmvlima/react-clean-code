import { memo, useState, useEffect } from 'react'
import * as ST from './styles'
import actions from '../../../../stores/actions'

const ListTask = (props) => {
    const { setItemTaskEdit, data } = props
    const [list, setList] = useState()

    useEffect(() => {
        setList(data)
    }, [data])


    return (
        <ST.Container>
            {Array.isArray(list) && list.map((row, key) => {
                return (
                    <ST.Item key={key}>
                        <ST.Data>
                            <ST.Checkbox key={key}>
                                <input type="checkbox" onChange={(params) => {
                                    actions.tasks.checked(row)
                                }}
                                    checked={row.checked}
                                />
                            </ST.Checkbox>
                            <ST.Label
                                onClick={() => {
                                    setItemTaskEdit(row)
                                }}
                            >{row.title}</ST.Label>
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