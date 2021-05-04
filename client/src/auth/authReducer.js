import { createReducer } from "@reduxjs/toolkit";

import initState from "../initState";
import authAction from "./authAction";

const authReducer = createReducer(initState.user, {
  [authAction.registrationSuccess]: (_, { payload }) => {
    return { token: payload.token, role: payload.role, email: payload.email };
  },
  [authAction.loginSuccess]: (_, { payload }) => {
    return {
      token: payload.token,
      role: payload.role,
      email: payload.email,
      isAuth: true,
    };
  },
  [authAction.logoutSuccess]: () => initState,
});

export default authReducer;
