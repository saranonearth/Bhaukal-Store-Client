import {
    EDIT_ADDRESS,
    ADD_ADDRESS_MODAL,
    CONFIRMATION_MODAL,
    CHANGE_PASSWORD_MODAL,
    EDIT_PROFILE_MODAL
} from '../actions/types';


const initialState = {
    editAddressModal: false,
    addAddressModal: false,
    changePasswordModal: false,
    editProfileModal: false,
    confirmationModal: false
}
export const modalReducer = (state = initialState, action) => {
    const {
        type
    } = action;

    switch (type) {
        case EDIT_ADDRESS:
            return {
                ...state,
                editAddressModal: !state.editAddressModal
            }
            case ADD_ADDRESS_MODAL:
                return {
                    ...state,
                    addAddressModal: !state.addAddressModal
                }
                case EDIT_PROFILE_MODAL:
                    return {
                        ...state,
                        editProfileModal: !state.editProfileModal
                    }
                    case CHANGE_PASSWORD_MODAL:
                        return {
                            ...state,
                            changePasswordModal: !state.changePasswordModal
                        }
                        case CONFIRMATION_MODAL:
                            return {
                                ...state,
                                confirmationModal: !state.confirmationModal
                            }
                            default:
                                return state
    }
}