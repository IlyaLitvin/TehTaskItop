import { createReducer } from "@reduxjs/toolkit";
import initState from "../initState";
import profilesActions from "./profilesActions";

const profilesReducer = createReducer(initState, {
  [profilesActions.addProfileSuccess]: (state, { payload }) => {
    return { ...state, profiles: [...state.profiles, ...[payload.profiles]] };
  },
});

export default { profilesReducer };
