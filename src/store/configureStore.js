import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
// import { actionStorageMiddleware, createStorageListener } from "redux-state-sync";

const configureStore = (rootReducer, saga, initialState) => {

    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [
        sagaMiddleware
        // actionStorageMiddleware
    ];

    const isNotProduction = process.env.NODE_ENV !== "production";
    // if (isNotProduction) {
    //     const createLogger = require("redux-logger");
    //     const logger = createLogger();
    //     middlewares.push(logger);
    // }
    const composeEnhancers = isNotProduction && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares,

        ))
    );

    sagaMiddleware.run(saga);

    // createStorageListener(store);

    return store;
};

export default configureStore;
