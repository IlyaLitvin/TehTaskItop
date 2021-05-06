import { host, authHost } from "../index";
import authAction from "./authAction";

const registration = (data) => (dispatch) => {
  dispatch(authAction.registrationRequest());
  host
    .post("/registration", data, {
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
  host
    .post("/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(({ data }) => {
      localStorage.setItem("token", data.token);
      dispatch(authAction.loginSuccess(data));
    })
    .catch((err) =>
      dispatch(authAction.logoutError(err), alert(err.response.data))
    );
};

const logOut = () => (dispatch) => {
  dispatch(authAction.logoutRequest());
  authHost
    .post("/logout")
    .then(() => {
      localStorage.removeItem("token");
      dispatch(authAction.logoutSuccess());
    })
    .catch((error) => dispatch(authAction.logoutError(error)));
};

export default { registration, login, logOut };
