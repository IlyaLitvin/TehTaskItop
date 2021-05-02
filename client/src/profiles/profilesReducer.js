import { createReducer } from "@reduxjs/toolkit";
import initState from "../initState";
import profilesActions from "./profilesActions";

const profilesReducer = createReducer(initState.profiles, {
  [profilesActions.getProfilesSuccess]: (_, { payload }) => {
    return payload;
  },
  [profilesActions.addProfileSuccess]: (state, { payload }) => {
    return payload.data;
  },
  [profilesActions.deleteProfileSuccess]: (state, { payload }) => {
    return {
      ...state,
      profiles: state.costs.filter(({ id }) => id !== payload.id),
    };
  },
});

export default profilesReducer;
