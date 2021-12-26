import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { accesslogReducer } from "../Reducer/accesslogReducer";
import { checkinReducer } from "../Reducer/checkinReducer";
import { checkoutReducer } from "../Reducer/checkoutReducer";

const reducer = combineReducers({
    log: accesslogReducer,
    checkIN: checkinReducer,
    checkOUT:checkoutReducer,

})

const initialState  = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store