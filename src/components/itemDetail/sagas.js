import {select, call, put, takeLatest} from "redux-saga/effects";
import { types } from "./constants";
import { getItemDetail } from "../services/itemDetailServices";

export function* fetchItemDetail({itemId}) {

  yield put({type: types.LOAD_ITEM_PENDING, });
  // console.log("itemId.saga.....", itemId)
  const itemDetail = yield call(getItemDetail, itemId);
  console.log("itemDetail.in.saga......", itemDetail)
  if (!itemDetail) return;

  yield put ({
    type: types.DATA_FOR_ITEM_DETAIL,
    itemDetail
  });

}


function* itemDetailSaga() {
  yield takeLatest(types.LOAD_ITEM_DETAIL, fetchItemDetail);
}

export default itemDetailSaga;
