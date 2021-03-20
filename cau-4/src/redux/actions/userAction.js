import * as types from '../actionTypes';
import api from '../../api/config';

export const actionGetUserData = userId => {
    return dispatch => {
        return api.get(`/users/${userId}`)
            .then(res => {
                console.log(res.data);
                dispatch(actionSaveUser(res.data))
            })
            .catch(err => console.error(err));
    }
}

export const actionSaveUser = user => {
    return {
        type: types.SAVE_USER,
        payload: user
    }
}

export const actionRemoveUser = () => ({
    type: types.REMOVE_USER
});