import * as types from '../actionTypes';

const initialState = {};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SAVE_USER:
            document.cookie = `userId = ${action.payload.id}`
            return {...action.payload};
        case types.REMOVE_USER:
            document.cookie = 'userId=; Path=/; 01 Jan 1970 00:00:01 GMT;';
            return {};
        default: return state;
    }
}

export default userReducer;