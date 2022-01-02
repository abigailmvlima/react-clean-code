const states = {
    name: 'NAVEGATE',
    success: 'NAVEGATE_SUCCESS',
    error: 'NAVEGATE_ERROR',
    initial: {
        loading: false,
        loaded: true,
        error: false,
        data: false,
        routeKey: false
    }

}

export default { states }