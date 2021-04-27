import { createAction } from "@reduxjs/toolkit";

const registrationRequest = createAction("/registrationRequest");
const registrationSuccess = createAction("/registrationSuccess");
const registrationError = createAction("/registrationError");

const loginRequest = createAction("/loginRequest");
const loginSuccess = createAction("/loginSuccess");
const loginError = createAction("/loginError");

const logoutRequest = createAction("/logoutRequest");
const logoutSuccess = createAction("/logoutSuccess");
const logoutError = createAction("/logoutError");

const getUserRequest = createAction("/getUserRequest");
const getUserSuccess = createAction("/getUserSuccess");
const getUserError = createAction("/getUserError");

const updateUserRequest = createAction("/updateUserRequest");
const updateUserSuccess = createAction("/updateUserSuccess");
const updateUserError = createAction("/updateUserError");

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
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getUserRequest,
  getUserSuccess,
  getUserError,
  updateUserRequest,
  updateUserSuccess,
  updateUserError,
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
