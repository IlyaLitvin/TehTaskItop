import { createAction } from "@reduxjs/toolkit";

const addProfileRequest = createAction("/addProfileRequest");
const addProfileSuccess = createAction("/addProfileSuccess");
const addProfileError = createAction("/addProfileError");

const deleteProfileRequest = createAction("/deleteProfileRequest");
const deleteProfileSuccess = createAction("/deleteProfileSuccess");
const deleteProfileError = createAction("/deleteProfileError");
