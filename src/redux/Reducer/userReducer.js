import { CREATEUSER_REQ, CREATEUSER_RES, CREATEUSER_ERR, CREATEUSER_RES_HIDE, CREATEUSER_DONE, UPDATEUSER_DONE } from "./../const/const"


export const userReducer = (state = { user: null, error: null, }, action) => {
    switch (action.type) {
        case CREATEUSER_REQ:
            return { userloading: true, user: null, error: null, }
        case CREATEUSER_RES:
            return { userloading: true, user: null, error: null, }
        case CREATEUSER_DONE:
            return { userloading: true, user: null, error: null, }
        case UPDATEUSER_DONE:
            return { userloading: false, user: action.payload, error: null, }
        case CREATEUSER_RES_HIDE:
            return { userloading: false, user: null, error: null  }
        case CREATEUSER_ERR:
            return { userloading: false, user: null,
                error: null,
                }
        default:
            return state
    }
}