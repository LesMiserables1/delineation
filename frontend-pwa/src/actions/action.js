import * as actions from './type'

export const setIsLoggedIn = isLoggedIn => ({
    type: actions.CHANGE__ISLOGGEDIN,
    payload: {
        isLoggedIn
    }
})
