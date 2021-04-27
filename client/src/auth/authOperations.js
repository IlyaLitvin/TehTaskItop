import axios from "axios";
import authAction from "./authAction";

const url = "http://localhost:8080/api/user";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const registration = (data) => (dispatch) => {
  dispatch(authAction.registrationRequest());
  axios
    .post(`${url}/registration`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(({ data }) => dispatch(authAction.registrationSuccess(data)))
    .catch((err) =>
      dispatch(authAction.registrationError(err), alert(err.response.data))
    );
};

const login = (data) => (dispatch) => {
  dispatch(authAction.loginRequest());
  axios
    .post(`${url}/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      token.set(res.data.token);
      dispatch(authAction.loginSuccess(res.data));
    })
    .catch((err) =>
      dispatch(authAction.logoutError(err), alert(err.response.data))
    );
};

const logOut = () => (dispatch) => {
  dispatch(authAction.logoutRequest());

  axios
    .post(`${url}/logout`)
    .then(() => {
      token.unset();
      dispatch(authAction.logoutSuccess());
    })
    .catch((error) => dispatch(authAction.logoutError(error)));
};

const getAllUsers = (data, token) => (dispatch) => {
  dispatch(authAction.getAllUsersRequest());
  axios
    .get(`${url}/users`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      console.log(data);
      dispatch(authAction.getAllUsersSuccess(data));
    })
    .catch((error) =>
      dispatch(authAction.getAllUsersError(error), alert(error.response.data))
    );
};

const getUser = (data, token) => (dispatch) => {
  dispatch(authAction.getUserRequest());
  axios
    .get(`${url}/users/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => dispatch(authAction.getUserSuccess(data)))
    .catch((error) =>
      dispatch(authAction.getUserError(error), alert(error.response.data))
    );
};

export default { registration, login, logOut, getAllUsers };
