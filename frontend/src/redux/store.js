import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import { productReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
  productList: productReducer,
  cart: cartReducer,
});

const middleware = [thunk];

// Setup Redux DevTools
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : 
  compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
