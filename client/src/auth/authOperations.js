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
    .then(({ data }) => {
      localStorage.setItem("token", data.token);
      dispatch(authAction.registrationSuccess(data));
    })
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
    .then(({ data }) => {
      token.set(data.token);
      localStorage.setItem("token", data.token);
      dispatch(authAction.loginSuccess(data));
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

export default { registration, login, logOut };
