import axios from "axios"
import { API, CHECKIN_REQ, CHECKIN_RES, CHECKIN_ERR, CHECKIN_RES_HIDE } from "./../const/const"


export const checkinAction = (updateddata) => async (dispatch) => {
    try {
        dispatch({ type: CHECKIN_REQ })
        
        const checkin = await axios.patch(`${API}/check-in/${updateddata.checkinid}`, {"checkinid": updateddata.checkinid, "checkoutid": updateddata.checkoutid})
        const logdata = {
            "name": updateddata.label,
            "accessType": 'Checkin',
            "user": updateddata._id
        }
        
        const log = (checkin && checkin.data._id) ? await axios.post(`${API}/access-log`, logdata): true

        dispatch({
            type: CHECKIN_RES,
            payload: (log && checkin) && {
                warning: checkin.data.message ? checkin.data.message : null,
                success: checkin.data.message ? null : 'checkin success'
            },
        })
        setTimeout(() => {
            dispatch({
                type: CHECKIN_RES_HIDE
            })
        }, 7000)
    } catch (error) {
        dispatch({
            type: CHECKIN_ERR,
            
        })

    }
}