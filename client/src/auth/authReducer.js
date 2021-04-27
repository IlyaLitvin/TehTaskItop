import { createReducer } from "@reduxjs/toolkit";

import initState from "../initState";
import authAction from "./authAction";

const authReducer = createReducer(initState, {
  [authAction.registrationSuccess]: (state, { payload }) => ({
    ...state,
    users: { user: { token: payload.token, role: payload.role } },
  }),
  [authAction.loginSuccess]: (state, { payload }) => ({
    ...state,
    users: { user: { token: payload.token, role: payload.role } },
  }),
  [authAction.logoutSuccess]: () => initState,
  [authAction.getAllUsersSuccess]: (state, { payload }) => ({
    ...state,
    users: { user: payload.user },
  }),
  [authAction.getUserSuccess]: (_, { payload }) => payload,
});

export default authReducer;
