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
};
