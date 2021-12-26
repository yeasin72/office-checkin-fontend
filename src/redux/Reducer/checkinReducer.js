import { CHECKIN_REQ, CHECKIN_RES, CHECKIN_ERR, CHECKIN_RES_HIDE } from "./../const/const"


export const checkinReducer = (state = { checkindata: null, error: null, }, action) => {
    switch (action.type) {
        case CHECKIN_REQ:
            return { checkinloading: true, checkindata: null, error: null, }
        case CHECKIN_RES:
            return { checkinloading: false, checkindata: action.payload, error: null  }
        case CHECKIN_RES_HIDE:
            return { checkinloading: false, checkindata: null, error: null  }
        case CHECKIN_ERR:
            return { checkinloading: false, checkindata: null,
                error: null,
                }
        default:
            return state
    }
}