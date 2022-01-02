import navigate from './navigate/sagas'
import tasks from './tasks/sagas'

export default [
    ...navigate,
    ...tasks
]
