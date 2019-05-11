import { fork, all } from "redux-saga/effects";
import cartridgesSaga from "../components/itemList/sagas";
import itemDetailSaga from "../components/itemDetail/sagas"

function* rootSaga() {

    yield all ([
        fork(cartridgesSaga),
        fork(itemDetailSaga)
    ]);
}

export default rootSaga;


//mongodb://<dbuser>:<dbpassword>@ds163769.mlab.com:63769/abaj
