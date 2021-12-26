import { ACCESSLOG_REQ, ACCESSLOG_RES, ACCESSLOG_ERR } from "./../const/const"


export const accesslogReducer = (state = { accesslog: null, error: null, }, action) => {
    switch (action.type) {
        case ACCESSLOG_REQ:
            return { accessloading: true, accesslog: null, error: null, }
        case ACCESSLOG_RES:
            return { accessloading: false, accesslog: action.payload, error: null  }
        case ACCESSLOG_ERR:
            return { accessloading: false, accesslog: null,
                error: null,
                }
        default:
            return state
    }
}