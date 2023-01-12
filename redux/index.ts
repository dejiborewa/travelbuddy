// store.ts
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
// eslint-disable-next-line import/prefer-default-export

export default store;
