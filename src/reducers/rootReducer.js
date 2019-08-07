import {
    combineReducers
} from 'redux'
import {
    alertReducer
} from './alertReducer';
import {
    modalReducer
} from './ModalReducer';
import {
    authReducer
} from './authReducer';

export const rootReducer = combineReducers({
    alert: alertReducer,
    modal: modalReducer,
    auth: authReducer
})