import types from './types';

const reduceState = (state = types.states.initial, action) => {
    switch (action.type) {
        case types.states.name: {
            const routeKey = {
                current: action?.current,
                last: state?.routeKey?.current,
            };
        

            return {
                ...state,
                data: { ...action.data ? action.data : {}},
                routeKey,
                loading: true,
                loaded: false,
                error: false,
            };
        }

        case types.states.success: {
            const data = JSON.parse(
                JSON.stringify({...state?.data, ...action.data ? action.data : {}})
            );

            return {
                ...state,
                data,
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