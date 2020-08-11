import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import reduxThunk from "redux-thunk";

import postsReducer from "./reducers/postsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = {
  posts: postsReducer,
};

const reducer = combineReducers(reducers);

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
