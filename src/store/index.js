import { createStore, applyMiddleware } from 'redux';

import ReduxLogger from 'redux-logger';

import rootReducer from '../reducers/root'

const middlewares = [ReduxLogger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store