import {
  configureStore,
  combineReducers,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";

export const signUpSucces = createAction("signUpSucces");

const reducer = createReducer(
  { user: { token: "", role: "" } },
  {
    [signUpSucces]: (state, { payload }) => ({
      ...state,
      user: { token: payload.token, role: payload.role },
    }),
  }
);

const store = configureStore({
  reducer: reducer,
});

export default store;
