import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

import  {uiReducer} from  './ui';
import {cartReducer} from './cart';
import { menuReducer} from './menu_oder';

const rootReducer = combineReducers({
  ui : uiReducer,
  cart : cartReducer,
  menu : menuReducer
});

export type RootState = ReturnType<typeof rootReducer>

const middlewareEnhancer = applyMiddleware(thunk)
const store = createStore(rootReducer,composeWithDevTools(middlewareEnhancer));

export default store;