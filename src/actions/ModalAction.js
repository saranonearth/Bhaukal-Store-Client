import {
    EDIT_ADDRESS,
    ADD_ADDRESS_MODAL,
    EDIT_PROFILE_MODAL,
    CHANGE_PASSWORD_MODAL,
    CONFIRMATION_MODAL
} from './types';

export const editAddressModal = () => dispatch => {
    dispatch({
        type: EDIT_ADDRESS
    })
}
export const addAddressModal = () => dispatch => {
    dispatch({
        type: ADD_ADDRESS_MODAL
    })
}

export const editProfileModal = () => dispatch => {
    dispatch({
        type: EDIT_PROFILE_MODAL
    })
}

export const changePasswordModal = () => dispatch => {
    console.log('here')
    dispatch({
        type: CHANGE_PASSWORD_MODAL
    })
}
export const confirmationModal = () => dispatch => {
    dispatch({
        type: CONFIRMATION_MODAL
    })
}