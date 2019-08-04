import {
    combineReducers
} from 'redux'
import {
    alertReducer
} from './alertReducer';
import {
    modalReducer
} from './ModalReducer';

export const rootReducer = combineReducers({
    alert: alertReducer,
    modal: modalReducer
})