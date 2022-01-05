const states = {
    name: 'NAVIGATE',
    success: 'NAVIGATE_SUCCESS',
    error: 'NAVIGATE_ERROR',
    initial: {
        loading: false,
        loaded: true,
        error: false,
        data: false,
        routeKey: false
    }

}

export default { states }