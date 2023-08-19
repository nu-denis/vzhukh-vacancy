import { combineReducers } from 'redux';

import { userInputReducer } from '../models/userInput/index';

export const rootReducer = combineReducers({
    userInput: userInputReducer,
});