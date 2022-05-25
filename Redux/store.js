import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from './Reducers/userReducer.js';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { addListing } from './Reducers/listingReducer.js';
const reducers = combineReducers({
  user: userReducer,
  addListing: addListing,
});
const middlewares = [thunk, logger];
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));