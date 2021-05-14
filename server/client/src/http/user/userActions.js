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

const updateUserRequset = createAction("/updateUserRequset");
const updateUserSuccess = createAction("/updateUserSuccess");
const updateUserError = createAction("/updateUserError");

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
  updateUserRequset,
  updateUserSuccess,
  updateUserError,
};
