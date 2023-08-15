import carthandler from "./carthandler";
import userinfihandler from "./userinfo";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    carthandler,
    userinfihandler
})
export default rootReducer