import { createReducer } from "@reduxjs/toolkit";
import initState from "../initState";
import profilesActions from "./profilesActions";

const profilesReducer = createReducer(initState.profiles, {
  [profilesActions.getProfilesSuccess]: (_, { payload }) => {
    return payload;
  },
  [profilesActions.addProfileSuccess]: (_, { payload }) => {
    return payload.data;
  },
  [profilesActions.deleteProfileSuccess]: (state, { payload }) => {
    return {
      ...state,
      profiles: state.profiles.filter(({ id }) => id !== payload),
    };
  },
});

export default profilesReducer;
