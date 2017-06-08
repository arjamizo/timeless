import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import helloReducer from '../reducers';


export default createStore(
    helloReducer,
    applyMiddleware(
        thunkMiddleware,
        createLogger()
    )
);