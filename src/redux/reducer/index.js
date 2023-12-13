import carthandler from "./carthandler";
import userinfihandler from "./userinfo";
import favhandler from "./favhandler";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    carthandler,
    userinfihandler,
    favhandler
})
export default rootReducer