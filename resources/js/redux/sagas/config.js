import rootSaga from './rootSaga';
import combinedReducers from '../reducers';
import createSagaMiddleWare from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

const sagaMiddleWare = createSagaMiddleWare();

export default function configureStore() {
    const middleWares = [
        sagaMiddleWare
    ];

    const store = createStore(combinedReducers, compose(applyMiddleware(...middleWares)));

    sagaMiddleWare.run(rootSaga, store.dispatch);

    return store;
}
