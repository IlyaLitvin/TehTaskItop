import { createReducer } from "@reduxjs/toolkit";
import initState from "../initState";
import profilesActions from "./profilesActions";

const profilesReducer = createReducer(initState.profiles, {
  [profilesActions.getProfilesSuccess]: (_, { payload }) => {
    return payload;
  },
  [profilesActions.addProfileSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [profilesActions.deleteProfileSuccess]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
  [profilesActions.updateProfileSuccess]: (state, { payload }) => {
    return [...state.filter(({ id }) => id !== payload.id), payload];
  },
});

export default profilesReducer;
