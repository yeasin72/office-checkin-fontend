import axios from "axios"
import { API, ACCESSLOG_REQ, ACCESSLOG_RES, ACCESSLOG_ERR } from "./../const/const"


export const accessLog = () => async (dispatch) => {
    try {
        dispatch({ type: ACCESSLOG_REQ })
        
        const accesslog = await axios.get(`${API}/access-log`)
        dispatch({
            type: ACCESSLOG_RES,
            payload: accesslog && accesslog.data,
        })
    } catch (error) {
        dispatch({
            type: ACCESSLOG_ERR,
            
        })

    }
}