import { combineReducers, configureStore } from "@reduxjs/toolkit";
import personeConsigliateReducer from "../reducers/personeConsigliateReducer";

const rootReducer = combineReducers({
  personeConsigliate: personeConsigliateReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
