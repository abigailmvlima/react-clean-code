import history from '../app/history'

const show = async (path) => {
    try {
        await history.push(path)
        return true
    } catch (error) {
        return false
    }
}

const push = async (path) => {
    try {
        await history.push(path)
        return true
    } catch (error) {
        return false
    }
}

export default {
    push,
    show,
}