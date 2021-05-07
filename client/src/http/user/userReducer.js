import { createReducer } from "@reduxjs/toolkit";
import userActions from "./userActions";

import initState from "../../initState";

const userReducer = createReducer(initState.users, {
  [userActions.getAllUsersSuccess]: (_, { payload }) => payload,
  [userActions.getUserSuccess]: (state, { payload }) => {
    return state.filter(({ id }) => id === payload.id);
  },
  [userActions.deleteUserSuccess]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload.id);
  },
  [userActions.getUsersInfoSuccess]: (_, { payload }) => payload,
});

export default userReducer;
