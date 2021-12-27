import axios from "axios"
import { API, CREATEUSER_REQ, CREATEUSER_RES, CREATEUSER_ERR, CREATEUSER_RES_HIDE, CREATEUSER_DONE, UPDATEUSER_DONE } from "./../const/const"


export const createuserAction = (userdata) => async (dispatch) => {
    try {
        dispatch({ type: CREATEUSER_REQ })

        const {data} = await axios.post(`${API}/user`, userdata)
        await dispatch({
            type: CREATEUSER_RES
        })
        console.log(data._id);
        const checkindata = {
            "name": data && data.value,
            "user": data && data._id,
            "accessType": 'Checkin',
        }
        const checkin = await axios.post(`${API}/check-in`, checkindata)
        console.log("checkin", checkin);
        const checkoutdata = {
            "name": data && data.value,
            "user": data && data._id,
            "accessType": 'Checkout',
        }
        const checkout = await axios.post(`${API}/checkout`, checkoutdata)
        const log = await axios.post(`${API}/access-log`, checkindata)
        await dispatch({
            type: CREATEUSER_DONE
        })

        const updateddata = {
            "value": data.value,
            "label": data.label,
            "checkinid": checkin && checkin.data._id,
            "checkoutid": checkout && checkout.data._id
        }
        const update = await axios.patch(`${API}/user/${data._id} `, updateddata)
        await dispatch({
            type: UPDATEUSER_DONE,
            payload: (checkout && log && checkin && update ) && 'User created',
        })
        setTimeout(() => {
            dispatch({
                type: CREATEUSER_RES_HIDE
            })
        }, 7000)
    } catch (error) {
        dispatch({
            type: CREATEUSER_ERR,
            
        })

    }
}