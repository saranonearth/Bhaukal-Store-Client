import {
    ALERT,
    REMOVE_ALERT
} from './types'

export const alert = (msg) => dispatch => {
    const id = Math.random();
    dispatch({
        type: ALERT,
        payload: {
            msg,
            id
        }
    })

    setTimeout((id) => {
        dispatch({
            type: REMOVE_ALERT,
            payload: id
        })
    }, 3000)
}