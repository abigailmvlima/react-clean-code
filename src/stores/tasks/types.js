const states = {
    name: 'TASKS',
    add: 'TASKS_ADD',
    edit: 'TASKS_EDIT',
    success: 'TASKS_SUCCESS',
    error: 'TASKS_ERROR',
    initial: {
        loading: false,
        loaded: true,
        error: false,
        data: [],
    }

}

export default { states }