import axios from "axios"
import { API, CHECKOUT_REQ, CHECKOUT_RES, CHECKOUT_ERR, CHECKOUT_RES_HIDE } from "./../const/const"


export const checkoutAction = (updatedData) => async (dispatch) => {
    try {
        dispatch({ type: CHECKOUT_REQ })
        
        const checkout = await axios.patch(`${API}/checkout/${updatedData.checkoutid}`, {"checkinid": updatedData.checkinid, "checkoutid": updatedData.checkoutid})

        const logdata = {
            "name": updatedData.label,
            "accessType": 'Checkout',
            "user": updatedData._id
        }
        const log = (checkout && checkout.data._id) ? await axios.post(`${API}/access-log`, logdata) : true
        dispatch({
            type: CHECKOUT_RES,
            payload: (checkout && log) && {
                warning: checkout.data.message ? checkout.data.message : null,
                success: checkout.data.message ? null : 'Checkout success',
            }
        })
        setTimeout(() => {
            dispatch({
                type: CHECKOUT_RES_HIDE
            })
        }, 7000)
    } catch (error) {
        dispatch({
            type: CHECKOUT_ERR,
            
        })

    }
}