import { createAction } from "@reduxjs/toolkit";

const addProfileRequest = createAction("/addProfileRequest");
const addProfileSuccess = createAction("/addProfileSuccess");
const addProfileError = createAction("/addProfileError");

const deleteProfileRequest = createAction("/deleteProfileRequest");
const deleteProfileSuccess = createAction("/deleteProfileSuccess");
const deleteProfileError = createAction("/deleteProfileError");

const getProfilesRequest = createAction("/getProfilesRequest");
const getProfilesSuccess = createAction("/getProfilesSuccess");
const getProfilesError = createAction("/getProfilesError");

const updateProfileRequest = createAction("/updateProfileRequest");
const updateProfileSuccess = createAction("/updateProfileSuccess");
const updateProfileError = createAction("/updateProfileError");

export default {
  addProfileRequest,
  addProfileSuccess,
  addProfileError,
  deleteProfileRequest,
  deleteProfileSuccess,
  deleteProfileError,
  getProfilesRequest,
  getProfilesSuccess,
  getProfilesError,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileError,
};
