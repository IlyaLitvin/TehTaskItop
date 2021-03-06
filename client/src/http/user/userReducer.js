import { createReducer } from "@reduxjs/toolkit";
import userActions from "./userActions";

import initState from "../../initState";

const userReducer = createReducer(initState.users, {
  [userActions.getAllUsersSuccess]: (_, { payload }) => payload,
  [userActions.getUserSuccess]: (state, { payload }) => {
    return state.filter(({ id }) => id === payload.id);
  },
  [userActions.deleteUserSuccess]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
  [userActions.getUsersInfoSuccess]: (_, { payload }) => payload,
  [userActions.updateUserSuccess]: (state, { payload }) => {
    return [...state.filter(({ id }) => id !== payload.id), payload];
  },
});

export default userReducer;
