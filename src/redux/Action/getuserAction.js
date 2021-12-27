import axios from "axios"
import { API, GETUSER_REQ, GETUSER_RES, GETUSER_ERR } from "./../const/const"


export const getuserAction = () => async (dispatch) => {
    try {
        dispatch({ type: GETUSER_REQ })
        
        const {data} = await axios.get(`${API}/user/`,)
        dispatch({
            type: GETUSER_RES,
            payload: data && data,
        })
    } catch (error) {
        dispatch({
            type: GETUSER_ERR,
            
        })

    }
}