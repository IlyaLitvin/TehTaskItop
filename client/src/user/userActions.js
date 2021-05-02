import { createAction } from "@reduxjs/toolkit";

const getUserRequest = createAction("/getUserRequest");
const getUserSuccess = createAction("/getUserSuccess");
const getUserError = createAction("/getUserError");

const deleteUserRequest = createAction("/deleteUserRequest");
const deleteUserSuccess = createAction("/deleteUserSuccess");
const deleteUserError = createAction("/deleteUserError");

const getAllUsersRequest = createAction("/getAllUsersRequest");
const getAllUsersSuccess = createAction("/getAllUsersSuccess");
const getAllUsersError = createAction("/getAllUsersError");

const getUsersInfoRequest = createAction("/getUsersInfoRequest");
const getUsersInfoSuccess = createAction("/getUsersInfoSuccess");
const getUsersInfoError = createAction("/getUsersInfoError");

export default {
  getUserRequest,
  getUserSuccess,
  getUserError,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserError,
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersError,
  getUsersInfoRequest,
  getUsersInfoSuccess,
  getUsersInfoError,
};
