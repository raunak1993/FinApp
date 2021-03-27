import { combineReducers } from 'redux';

import cardReducer from './card';
import userReducer from './user';
import expenseReducer from "./expense";

const rootReducer = combineReducers({
    user: userReducer,
    card: cardReducer,
    expense: expenseReducer
});

export default rootReducer;
