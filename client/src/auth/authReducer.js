import { createReducer } from "@reduxjs/toolkit";

import initState from "../initState";
import authAction from "./authAction";

const authReducer = createReducer(initState.user, {
  [authAction.registrationSuccess]: (state, { payload }) => ({
    ...state,
    token: payload.token,
    role: payload.role,
    email: payload.email,
  }),
  [authAction.loginSuccess]: (state, { payload }) => ({
    ...state,
    token: payload.token,
    role: payload.role,
    email: payload.email,
    isAuth: true,
  }),
  [authAction.logoutSuccess]: () => initState,
});

export default authReducer;
