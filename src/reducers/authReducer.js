import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
    AUTH_ERROR,
    GET_USER,
    USER_LOGGEDIN
} from '../actions/types'

const initialState = {
    user: null,
    loading: true,
    token: localStorage.getItem('bklToken'),
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    const {
        payload,
        type
    } = action;

    switch (type) {
        case SIGNUP_SUCCESS:
        case USER_LOGGEDIN:
            localStorage.setItem('bklToken', payload)
            return {
                ...state,
                token: payload,
                    isAuth: true,
                    loading: false
            }
            case SIGNUP_FAILED:
            case AUTH_ERROR:
                localStorage.removeItem('bklToken')
                return {
                    user: null,
                        loading: true,
                        token: null,
                        isAuth: false
                }
                case GET_USER:
                    return {
                        ...state,
                        user: payload,
                            loading: false,
                            isAuth: true
                    }
                    default:
                        return state;
    }
}