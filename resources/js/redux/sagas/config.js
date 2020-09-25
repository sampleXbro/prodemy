import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import combinedReducers from '../reducers';
import rootSaga from './rootSaga';
import actionTypes from "../actions/actionTypes";

const sagaMiddleWare = createSagaMiddleWare();

export default function configureStore() {
    const middleWares = [
        sagaMiddleWare
    ];

    const store = createStore(combinedReducers, compose(applyMiddleware(...middleWares)));

    sagaMiddleWare.run(rootSaga, store.dispatch);

    return store;
}
