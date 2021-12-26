import axios from "axios"
import { API, CHECKIN_REQ, CHECKIN_RES, CHECKIN_ERR, CHECKIN_RES_HIDE } from "./../const/const"


export const checkinAction = (checkine, loge) => async (dispatch) => {
    try {
        dispatch({ type: CHECKIN_REQ })
        
        const checkin = await axios.post(`${API}/check-in`, checkine)
        const log = await axios.post(`${API}/access-log`, loge)
        console.log("log",log);
        dispatch({
            type: CHECKIN_RES,
            payload: (log && checkin) && 'checkin success',
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