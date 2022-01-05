import types from './types';

const reduceState = (state = types.states.initial, action) => {
    switch (action.type) {
        case types.states.add: {
            return {
                ...state,
                value: action.value,
                loading: true,
                loaded: false,
                error: false,
            };
        }
        case types.states.edit: {
            return {
                ...state,
                value: action.value,
                loading: true,
                loaded: false,
                error: false,
            };
        }

        case types.states.remove: {
            return {
                ...state,
                value: action.value,
                loading: true,
                loaded: false,
                error: false,
            };
        }
        case types.states.checked: {
            return {
                ...state,
                value: action.value,
                loading: true,
                loaded: false,
                error: false,
            };
        }
        case types.states.success: {

            return {
                ...state,
                data: action.data,
                loading: false,
                loaded: true,
                error: false,
            };
        }
        case types.states.error: {
            return {
                ...state,
                data: { ...state.data, ...action.data },
                loading: false,
                loaded: true,
                error: true,
            };
        }

        default:
            return state;
    }
};

export default {
    [types.states.name]: reduceState,
};