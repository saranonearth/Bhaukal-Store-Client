import {
    ALERT,
    REMOVE_ALERT
} from '../actions/types'
const initialState = {
    alertMsg: []
}

export const alertReducer = (state = initialState, action) => {

    const {
        payload,
        type
    } = action;

    switch (type) {
        case ALERT:
            return {
                ...state,
                alertMsg: [...state.alertMsg, payload]
            }
            case REMOVE_ALERT:
                return {
                    ...state,
                    alertMsg: state.alertMsg.filter(alert => alert.id === payload)
                }
                default:
                    return state;
    }

}