import createReducer from "../../utils/createReducer";
const Immutable = require("seamless-immutable").static;
// import * as efileTypes from "./constants";
import {types} from "./constants";


const initialState = Immutable.from({
    pending: true,
    cartridges: []
});

const listPending = (state) => Immutable.merge (state, {
  pending: true
});

const loadCartridgesData = (state, {cartridges}) => Immutable.merge (state, {
  cartridges,
  pending: false
})

const handlers = {
    [types.LOAD_PENDING]: listPending,
    [types.DATA_FOR_CARTRIDGES]: loadCartridgesData
};

export default createReducer(initialState, handlers);
