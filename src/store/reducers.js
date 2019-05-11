import {combineReducers} from "redux";

import list from "../components/itemList/reducer";
import item from "../components/itemDetail/reducer";

export default combineReducers({
    list,
    item
});
