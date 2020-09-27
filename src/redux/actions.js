import { initialState } from './reducers';

export default function state(state = initialState, { type, payload }) {
    switch(type) {
        case 'COMMAND':
            return { ...state, history: [ ...state.history, payload ] }

        case 'UPDATE':
            return { ...state, position: payload }

        default:
            return state;
    }
}