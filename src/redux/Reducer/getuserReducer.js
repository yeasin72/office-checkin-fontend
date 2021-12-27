import { GETUSER_REQ, GETUSER_RES, GETUSER_ERR } from "./../const/const"


export const getuserReducer = (state = { users: null, error: null, }, action) => {
    switch (action.type) {
        case GETUSER_REQ:
            return { userloading: true, users: null, error: null, }
        case GETUSER_RES:
            return { userloading: false, users: action.payload, error: null  }
        case GETUSER_ERR:
            return { userloading: false, users: null,
                error: null,
                }
        default:
            return state
    }
}