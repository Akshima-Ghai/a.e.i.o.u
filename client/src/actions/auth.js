import * as api from '../api/index';
import { AUTH } from '../constants/actionTypes';


export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signin(formData);
        dispatch({ type: AUTH, data });
        history.push('/home/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);
        dispatch({ type: AUTH, data });
        history.push('/home/');
    } catch (err) {
        console.log(err);
    }
}