import { createAction } from "@reduxjs/toolkit";

const getUsersInfoRequest = createAction("/getUsersInfoRequest");
const getUsersInfoSuccess = createAction("/getUsersInfoSuccess");
const getUsersInfoError = createAction("/getUsersInfoError");

export default {
  getUsersInfoRequest,
  getUsersInfoSuccess,
  getUsersInfoError,
};
