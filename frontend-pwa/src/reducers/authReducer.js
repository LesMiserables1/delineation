import * as actions from '../actions/type';

const initialState = {
    isLoggedIn: false,
}

export default function(state = initialState, action) {
    switch(action.type){
        case actions.CHANGE__ISLOGGEDIN:
            return {
                isLoggedIn: action.payload.isLoggedIn
            }
        default:
            return state;
    }
}