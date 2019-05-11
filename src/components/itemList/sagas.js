import {select, call, put, takeLatest} from "redux-saga/effects";
import { types } from "./constants";
import { getCartridges } from "../services/canonServices";

export function* fetchCartridgesData() {

  yield put({type: types.LOAD_PENDING});

  const cartridges = yield call(getCartridges);
  if (!cartridges) return;

  yield put ({
    type: types.DATA_FOR_CARTRIDGES,
    cartridges
  });

}


function* cartridgesSaga() {
  yield takeLatest(types.LOAD_CARTRIDGES, fetchCartridgesData);
}

export default cartridgesSaga;
