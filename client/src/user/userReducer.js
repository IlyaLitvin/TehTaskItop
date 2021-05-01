import { createReducer } from "@reduxjs/toolkit";
import userActions from "./userActions";

import initState from "../initState";

const userReducer = createReducer(initState, {
  [userActions.getAllUsersSuccess]: (state, { payload }) => ({
    ...state,
    users: payload.users,
  }),
  [userActions.getUserSuccess]: (_, { payload }) => payload,
  [userActions.deleteUserSuccess]: (state, { payload }) => {
    return {
      ...state,
      users: state.users.filter(({ id }) => id !== payload.id),
    };
  },
  [userActions.getUsersInfoSuccess]: (state, { payload }) => {
    return {
      ...state,
      dashboard: payload.dashboard,
    };
  },
});

export default userReducer;
