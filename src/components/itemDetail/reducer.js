import createReducer from "../../utils/createReducer";
const Immutable = require("seamless-immutable").static;
import {types} from "./constants";


const initialState = Immutable.from({
    itemDetailPending: true,
    itemDetail: {}
});

const loadItemPending = (state) => Immutable.merge (state, {
  itemDetailPending: true
});

const loadItemData = (state, {itemDetail}) => Immutable.merge (state, {
  itemDetail,
  itemDetailPending: false
})

const handlers = {
    [types.LOAD_ITEM_PENDING]: loadItemPending,
    [types.DATA_FOR_ITEM_DETAIL]: loadItemData
};

export default createReducer(initialState, handlers);
