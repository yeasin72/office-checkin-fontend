import { CHECKOUT_REQ, CHECKOUT_RES, CHECKOUT_ERR, CHECKOUT_RES_HIDE } from "./../const/const"


export const checkoutReducer = (state = { checkoutdata: null, error: null, }, action) => {
    switch (action.type) {
        case CHECKOUT_REQ:
            return { checkoutloading: true, checkoutdata: null, warning: null, error: null, }
        case CHECKOUT_RES:
            return { checkoutloading: false, checkoutdata: action.payload.success, warning: action.payload.warning, error: null  }
        case CHECKOUT_RES_HIDE:
            return { checkoutloading: false, checkoutdata: null, warning: null, error: null  }
        case CHECKOUT_ERR:
            return { checkoutloading: false, checkoutdata: null, warning: null,
                error: null,
                }
        default:
            return state
    }
}