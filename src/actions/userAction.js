import {
    EDIT_PROFILE,
    LOGOUT_USER
} from './types'
import {
    alert
} from './AlertActions';
import axios from 'axios';

export const editProfile = (formData) => async dispatch => {
    console.log(formData)
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = {
            name: formData.name,
            mobileNumber: formData.mobileNumber,
            dob: formData.dob
        };
        const res = await axios.patch('/user', body, config)
        console.log(res)
        console.log(res.data.user)
        dispatch({
            type: EDIT_PROFILE,
            payload: res.data.user
        })
        dispatch(alert('Profile edited'))
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(alert(error.msg)));
        }
        dispatch(alert('Something went wrong'))
    }
}



export const removeUser = (userId) => async dispatch => {
    console.log(userId)
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = {
            userId
        }
        const res = await axios.delete('/user', body, config);
        dispatch({
            type: LOGOUT_USER
        })
        dispatch(alert(res.data.msg));
    } catch (error) {
        console.log(error.data)

    }
}