import { CHECKIN_REQ, CHECKIN_RES, CHECKIN_ERR, CHECKIN_RES_HIDE } from "./../const/const"


export const checkinReducer = (state = { checkindata: null, error: null, }, action) => {
    switch (action.type) {
        case CHECKIN_REQ:
            return { checkinloading: true, checkindata: null, warning: null, error: null, }
        case CHECKIN_RES:
            return { checkinloading: false, checkindata: action.payload.success, warning: action.payload.warning, error: null  }
        case CHECKIN_RES_HIDE:
            return { checkinloading: false, checkindata: null, warning: null, error: null  }
        case CHECKIN_ERR:
            return { checkinloading: false, checkindata: null, warning: null,
                error: null,
                }
        default:
            return state
    }
}