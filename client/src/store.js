import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";

// export const reducer = combineReducers({
//   authReducer,
// });

const store = configureStore({
  reducer: authReducer,
});

export default store;
