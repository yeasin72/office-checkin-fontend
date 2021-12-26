import axios from "axios"
import { API, CHECKOUT_REQ, CHECKOUT_RES, CHECKOUT_ERR, CHECKOUT_RES_HIDE } from "./../const/const"


export const checkoutAction = (checkoute, loge) => async (dispatch) => {
        console.log("checkoute", checkoute);
    try {
        dispatch({ type: CHECKOUT_REQ })
        
        const checkout = await axios.post(`${API}/checkout/`, checkoute)
        const log = await axios.post(`${API}/access-log`, loge)
        dispatch({
            type: CHECKOUT_RES,
            payload: (checkout && log) && 'Checkout success',
        })
        setTimeout(() => {
            dispatch({
                type: CHECKOUT_RES_HIDE
            })
        }, 7000)
    } catch (error) {
        console.log("it's working");
        dispatch({
            type: CHECKOUT_ERR,
            
        })

    }
}