import { createReducer } from "@reduxjs/toolkit";
import dashboardActions from "./dashboardActions";

import initState from "../initState";

const dashboardReducer = createReducer(initState.dashboard, {
  [dashboardActions.getUsersInfoSuccess]: (_, { payload }) => payload,
});

export default dashboardReducer;
